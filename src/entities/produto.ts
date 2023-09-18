import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { PedidoItem } from "./pedidoItem"

@Entity()
export class Produto {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  descricao: string

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number

  @OneToMany(type => PedidoItem, type => type.produto)
  pedido_itens: PedidoItem[]
}