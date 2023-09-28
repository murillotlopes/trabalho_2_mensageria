import { Pedidoa } from "../../entities/pedido"
import { faker } from '@faker-js/faker'
import { Itemsa } from "../../entities/pedidoItem"
import { Skua } from "../../entities/produto"
import { Customera } from "../../entities/cliente"

export const geradorDePedidos = async (): Promise<Pedidoa> => {
  const pedido = new Pedidoa()
  const qtdItens = faker.number.int({ min: 1, max: 15 })

  const cliente = new Customera()

  cliente.name = faker.person.fullName()

  pedido.customer = cliente
  pedido.uuid = faker.string.uuid()
  pedido.items = await geradorDePedidoItens(qtdItens)

  return pedido
}

export const geradorDePedidoItens = async (qtdItens: number): Promise<Itemsa[]> => {
  let itens: Itemsa[] = []

  for (let i = 0; i < qtdItens; i++) {
    const item = new Itemsa()

    item.quantity = faker.number.int({ min: 1, max: 30 })
    item.sku = await geradorDeProduto()
    item.value = item.sku.value

    itens.push(item)
  }

  return itens
}

export const geradorDeProduto = async (): Promise<Skua> => {
  const produto = new Skua()

  produto.id = faker.string.uuid()
  produto.descricao = faker.commerce.productName()
  produto.value = faker.number.float({ min: 1, max: 30, precision: 2 })

  return produto
}
