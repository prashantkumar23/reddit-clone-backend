import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1614326673693 implements MigrationInterface {
    name = 'createTableUsers1614326673693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createAt" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "subs" RENAME COLUMN "createAt" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "posts" RENAME COLUMN "createAt" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" RENAME COLUMN "createdAt" TO "createAt"`);
        await queryRunner.query(`ALTER TABLE "subs" RENAME COLUMN "createdAt" TO "createAt"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createdAt" TO "createAt"`);
    }

}
