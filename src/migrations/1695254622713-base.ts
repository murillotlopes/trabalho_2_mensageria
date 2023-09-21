import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1695254622713 implements MigrationInterface {
    name = 'Base1695254622713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "skua" ("codigo" SERIAL NOT NULL, "id" character varying NOT NULL, "descricao" character varying, "value" numeric(10,2) NOT NULL, CONSTRAINT "PK_03d1b4847365c1940c8dbd07fbc" PRIMARY KEY ("codigo"))`);
        await queryRunner.query(`CREATE TABLE "itemsa" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "value" numeric(10,2) NOT NULL, "pedido_id" integer, "produto_id" integer, CONSTRAINT "PK_f9d71080c9079e8ae2c8902874d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidoa" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "data_cadastro" TIMESTAMP NOT NULL DEFAULT now(), "cliente_id" integer, CONSTRAINT "PK_1c0080d7d5e6cefa7ea132185fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customera" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_33e3ba1d20160eff5032feca2de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "itemsa" ADD CONSTRAINT "FK_06e502bc8c8835d94bfc82cc6bc" FOREIGN KEY ("pedido_id") REFERENCES "pedidoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itemsa" ADD CONSTRAINT "FK_47ca02c64c3b299999405655d30" FOREIGN KEY ("produto_id") REFERENCES "skua"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidoa" ADD CONSTRAINT "FK_0001251392ac5698ff723ff6ed7" FOREIGN KEY ("cliente_id") REFERENCES "customera"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidoa" DROP CONSTRAINT "FK_0001251392ac5698ff723ff6ed7"`);
        await queryRunner.query(`ALTER TABLE "itemsa" DROP CONSTRAINT "FK_47ca02c64c3b299999405655d30"`);
        await queryRunner.query(`ALTER TABLE "itemsa" DROP CONSTRAINT "FK_06e502bc8c8835d94bfc82cc6bc"`);
        await queryRunner.query(`DROP TABLE "customera"`);
        await queryRunner.query(`DROP TABLE "pedidoa"`);
        await queryRunner.query(`DROP TABLE "itemsa"`);
        await queryRunner.query(`DROP TABLE "skua"`);
    }

}
