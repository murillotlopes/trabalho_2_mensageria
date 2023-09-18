import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Pedido } from "./pedido"
import { Produto } from "./produto"

@Entity()
export class PedidoItem {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  quantidade: number

  @Column('decimal', { precision: 10, scale: 2 })
  valor_un: number

  @ManyToOne(type => Pedido)
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido

  @ManyToOne(type => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto
}