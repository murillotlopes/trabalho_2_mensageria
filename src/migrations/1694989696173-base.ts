import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1694989696173 implements MigrationInterface {
    name = 'Base1694989696173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "valor" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP COLUMN "valor_un"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD "valor_un" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP COLUMN "valor_un"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD "valor_un" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "valor" integer NOT NULL`);
    }

}
