import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Pedido } from "./pedido"

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @OneToMany(type => Pedido, type => type.cliente)
  pedidos: Pedido[]
}