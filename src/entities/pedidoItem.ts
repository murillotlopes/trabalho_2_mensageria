import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Pedidoa } from "./pedido"
import { Skua } from "./produto"

@Entity()
export class Itemsa {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity: number

  @Column('decimal', { precision: 10, scale: 2 })
  value: number

  @ManyToOne(type => Pedidoa)
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedidoa

  @ManyToOne(type => Skua)
  @JoinColumn({ name: 'produto_id' })
  sku: Skua
}