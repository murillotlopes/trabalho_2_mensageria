import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1694651332858 implements MigrationInterface {
    name = 'Base1694651332858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, "valor" character varying NOT NULL, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido_item" ("id" SERIAL NOT NULL, "quantidade" character varying NOT NULL, "valor_un" character varying NOT NULL, "pedido_id" uuid, "produto_id" integer, CONSTRAINT "PK_debcac4cf65cba2bec324d55415" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "criado_em" character varying NOT NULL, "cliente_id" integer, CONSTRAINT "PK_ea4af4df60a5c3ae7c502cc63e8" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD CONSTRAINT "FK_6fc4671e2aa95c54ef1bcba2392" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_item" ADD CONSTRAINT "FK_5c33c3ab077a50821144b3d15f5" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_ab19fb380d17682f87649eded89" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_ab19fb380d17682f87649eded89"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP CONSTRAINT "FK_5c33c3ab077a50821144b3d15f5"`);
        await queryRunner.query(`ALTER TABLE "pedido_item" DROP CONSTRAINT "FK_6fc4671e2aa95c54ef1bcba2392"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "pedido_item"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
