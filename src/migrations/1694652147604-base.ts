import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1694652147604 implements MigrationInterface {
    name = 'Base1694652147604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" RENAME COLUMN "criado_em" TO "data_cadastro"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "data_cadastro"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "data_cadastro" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "data_cadastro"`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "data_cadastro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido" RENAME COLUMN "data_cadastro" TO "criado_em"`);
    }

}
