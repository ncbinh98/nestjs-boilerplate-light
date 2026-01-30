import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/typeorm.module';
import { databaseConfig } from './config/database.config';
import { UtilsModule } from './shared/utils/utils.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { RedisModule } from './infra/redis/redis.module';
import { redisConfig } from './config/redis.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import everywhere
      load: [databaseConfig, redisConfig],
    }),
    DatabaseModule,
    RedisModule,
    UtilsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
