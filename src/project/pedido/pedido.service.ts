import { Pedidoa } from "../../entities/pedido"
import pedidoRepositorio from "./pedido.repositorio"

class PedidoService {
  public async filtrar(uuid: string) {
    try {
      // .addSelect(`COALESCE(sum(pi.quantidade * pi.valor_un), 0)`, 'valor_total')
      const pedidos: Pedidoa[] = await pedidoRepositorio.filtrar(uuid)

      for (const pedido of pedidos) {
        pedido['valor_total'] = pedido.items.reduce((acc, item) => acc + (item.value * item.quantity), 0)
      }

      return pedidos
    } catch (error) {

    }
  }
}

export default new PedidoService()