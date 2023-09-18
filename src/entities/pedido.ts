import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings"
import { Cliente } from "./cliente"
import { PedidoItem } from "./pedidoItem"

@Entity()
export class Pedido {

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @CreateDateColumn()
    data_cadastro: Date;

    @ManyToOne(type => Cliente)
    @JoinColumn({ name: 'cliente_id' })
    cliente: Cliente

    @OneToMany(type => PedidoItem, type => type.pedido)
    itens: PedidoItem[]
}
