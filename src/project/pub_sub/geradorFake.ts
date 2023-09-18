import { Pedido } from "../../entities/pedido"
import { faker } from '@faker-js/faker'
import { PedidoItem } from "../../entities/pedidoItem"
import { Produto } from "../../entities/produto"
import { Cliente } from "../../entities/cliente"

export const geradorDePedidos = async (): Promise<Pedido> => {
  const pedido = new Pedido()
  const qtdItens = faker.number.int({ min: 1, max: 15 })

  const cliente = new Cliente()

  cliente.nome = faker.person.fullName()

  pedido.cliente = cliente
  pedido.itens = await geradorDePedidoItens(qtdItens)

  return pedido
}

export const geradorDePedidoItens = async (qtdItens: number): Promise<PedidoItem[]> => {
  let itens: PedidoItem[] = []

  for (let i = 0; i < qtdItens; i++) {
    const item = new PedidoItem()

    item.quantidade = faker.number.int({ min: 1, max: 30 })
    item.produto = await geradorDeProduto()
    item.valor_un = item.produto.valor

    itens.push(item)
  }

  return itens
}

export const geradorDeProduto = async (): Promise<Produto> => {
  const produto = new Produto()

  produto.descricao = faker.commerce.productName()
  produto.valor = faker.number.float({ min: 1, max: 30, precision: 2 })

  return produto
}
