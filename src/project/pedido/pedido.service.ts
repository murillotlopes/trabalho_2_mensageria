import { Pedido } from "../../entities/pedido"
import pedidoRepositorio from "./pedido.repositorio"

class PedidoService {
  public async filtrar(uuid: string) {
    try {
      // .addSelect(`COALESCE(sum(pi.quantidade * pi.valor_un), 0)`, 'valor_total')
      const pedidos: Pedido[] = await pedidoRepositorio.filtrar(uuid)

      for (const pedido of pedidos) {
        pedido['valor_total'] = pedido.itens.reduce((acc, item) => acc + (item.valor_un * item.quantidade), 0)
      }

      return pedidos
    } catch (error) {

    }
  }
}

export default new PedidoService()