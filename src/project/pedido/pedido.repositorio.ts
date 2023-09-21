import { Repository } from "typeorm"
import { Pedidoa } from "../../entities/pedido"
import { AppDataSource } from "../../data-source"
import clienteRepositorio from "../cliente/cliente.repositorio"
import pedidoItemRepositorio from "../pedidoItem/pedidoItem.repositorio"

class PedidoRepositorio {
  private repo: Repository<Pedidoa>
  constructor() {
    this.repo = AppDataSource.getRepository(Pedidoa)
  }

  public async filtrar(uuid: string) {
    try {

      const query = this.repo.createQueryBuilder('p')
        .innerJoin('p.items', 'pi')
        .innerJoin('p.customer', 'c')
        .select('p.uuid')
        .addSelect('p.data_cadastro')
        .addSelect('c')
        .addSelect('pi')
        .groupBy('p.uuid, c.id, pi.id, p.data_cadastro, p.id')
      if (uuid) query.where('uuid = :uuid', { uuid })

      return await query.getMany()
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async salvar(pedido: Pedidoa) {
    try {
      if (pedido.customer) {
        pedido.customer = await clienteRepositorio.salvar(pedido.customer)
      }

      if (pedido.items.length > 0) {
        const itens = Object.assign([], pedido.items)
        pedido.items = []
        for (const item of itens) {
          const itemSalvo = await pedidoItemRepositorio.salvar(item)
          pedido.items.push(itemSalvo)
        }
      }

      this.repo.save(pedido)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

export default new PedidoRepositorio()