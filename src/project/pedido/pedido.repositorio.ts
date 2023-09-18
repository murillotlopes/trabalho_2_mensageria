import { Repository } from "typeorm"
import { Pedido } from "../../entities/pedido"
import { AppDataSource } from "../../data-source"
import clienteRepositorio from "../cliente/cliente.repositorio"
import pedidoItemRepositorio from "../pedidoItem/pedidoItem.repositorio"

class PedidoRepositorio {
  private repo: Repository<Pedido>
  constructor() {
    this.repo = AppDataSource.getRepository(Pedido)
  }

  public async filtrar(uuid: string) {
    try {

      const query = this.repo.createQueryBuilder('p')
        .innerJoin('p.itens', 'pi')
        .innerJoin('p.cliente', 'c')
        .select('p.uuid')
        .addSelect('p.data_cadastro')
        .addSelect('c')
        .addSelect('pi')
        .groupBy('p.uuid, c.id, pi.id')
      if (uuid) query.where('uuid = :uuid', { uuid })

      return await query.getMany()
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async salvar(pedido: Pedido) {
    try {
      if (pedido.cliente) {
        pedido.cliente = await clienteRepositorio.salvar(pedido.cliente)
      }

      if (pedido.itens.length > 0) {
        const itens = Object.assign([], pedido.itens)
        pedido.itens = []
        for (const item of itens) {
          const itemSalvo = await pedidoItemRepositorio.salvar(item)
          pedido.itens.push(itemSalvo)
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