import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Itemsa } from "./pedidoItem"

@Entity()
export class Skua {

  @PrimaryGeneratedColumn()
  codigo: number

  @Column()
  id: string

  @Column({ nullable: true })
  descricao: string

  @Column('decimal', { precision: 10, scale: 2 })
  value: number

  @OneToMany(type => Itemsa, type => type.sku)
  items: Itemsa[]
}