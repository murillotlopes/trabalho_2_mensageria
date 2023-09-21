import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings"
import { Customera } from "./cliente"
import { Itemsa } from "./pedidoItem"

@Entity()
export class Pedidoa {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    uuid: string

    @CreateDateColumn()
    data_cadastro: Date;

    @ManyToOne(type => Customera)
    @JoinColumn({ name: 'cliente_id' })
    customer: Customera

    @OneToMany(type => Itemsa, type => type.pedido)
    items: Itemsa[]
}
