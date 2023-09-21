import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Pedidoa } from "./pedido"

@Entity()
export class Customera {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Pedidoa, type => type.customer)
  pedidos: Pedidoa[]
}