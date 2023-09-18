import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1694985261161 implements MigrationInterface {
    name = 'Base1694985261161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "valor" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP COLUMN "quantidade"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD "quantidade" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP COLUMN "valor_un"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD "valor_un" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP COLUMN "valor_un"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD "valor_un" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP COLUMN "quantidade"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD "quantidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "valor" character varying NOT NULL`);
    }

}
