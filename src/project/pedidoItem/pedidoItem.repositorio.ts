import { Repository } from "typeorm";
import { Itemsa } from "../../entities/pedidoItem";
import { AppDataSource } from "../../data-source";
import produtoRepositorio from "../produto/produto.repositorio";

class PedidoItemRepositorio {
  repo: Repository<Itemsa>
  constructor() {
    this.repo = AppDataSource.getRepository(Itemsa)
  }

  public async salvar(pedidoItem: Itemsa): Promise<Itemsa> {
    if (pedidoItem.sku) {
      pedidoItem.sku = await produtoRepositorio.salvar(pedidoItem.sku)
    }

    pedidoItem.value = pedidoItem.sku.value

    return this.repo.save(pedidoItem)
  }
}

export default new PedidoItemRepositorio()