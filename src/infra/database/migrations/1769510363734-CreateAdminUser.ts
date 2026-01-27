import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdminUser1769510363734 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO "public"."users" ("id", "firstName", "lastName", "email", "password", "isActive", "createdAt", "updatedAt", "refreshToken") VALUES
('857e9dcf-6d5b-4c94-bc22-dfc3ed355100', 'Admin', 'System', 'admin@gmail.com', '$2b$10$cihJh2Qtan9wUeJ6MFgVpe3JfIDsZtWbpzJD8JXO6vy.fAvPqHUM6', 'true', '2025-12-23 13:45:52.611612+00', '2026-01-11 10:14:54.554333+00', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NTdlOWRjZi02ZDViLTRjOTQtYmMyMi1kZmMzZWQzNTU2M2YiLCJ0eXBlIjoicmVmcmVzaCIsImlhdCI6MTc2ODEyNjQ5NCwiZXhwIjoxNzY4NzMxMjk0fQ.CjG7RpiLr5fyTIEOxls6ZTQB3RuJhskgO_xsyyYh7VI');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
