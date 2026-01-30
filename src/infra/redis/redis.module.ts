import { Global, Module, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

export const REDIS_CLIENT = 'REDIS_CLIENT';
/* 
  HOW TO USE:
  import { Inject, Injectable } from '@nestjs/common';
  import Redis from 'ioredis';
  import { REDIS_CLIENT } from 'src/infra/redis/redis.module';
  @Injectable()
  export class MyService {
    constructor(@Inject(REDIS_CLIENT) private readonly redis: Redis) {}
    async someMethod() {
      await this.redis.set('key', 'value');
      const val = await this.redis.get('key');
    }
  }
*/

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: (configService: ConfigService) => {
        const logger = new Logger('RedisModule');
        const host = configService.get<string>('redis.host');
        const port = configService.get<number>('redis.port');
        const password = configService.get<string>('redis.password');
        const db = configService.get<number>('redis.db');

        const client = new Redis({
          host,
          port,
          password,
          db,
        });

        client.on('connect', () => {
          logger.log(`Connected to Redis at ${host}:${port}`);
        });

        client.on('error', (err) => {
          logger.error('Redis Client Error', err.stack);
        });

        return client;
      },
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}
