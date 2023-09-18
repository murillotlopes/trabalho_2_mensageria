import { Repository } from "typeorm";
import { PedidoItem } from "../../entities/pedidoItem";
import { AppDataSource } from "../../data-source";
import produtoRepositorio from "../produto/produto.repositorio";

class PedidoItemRepositorio {
  repo: Repository<PedidoItem>
  constructor() {
    this.repo = AppDataSource.getRepository(PedidoItem)
  }

  public async salvar(pedidoItem: PedidoItem): Promise<PedidoItem> {
    if (pedidoItem.produto) {
      pedidoItem.produto = await produtoRepositorio.salvar(pedidoItem.produto)
    }

    return this.repo.save(pedidoItem)
  }
}

export default new PedidoItemRepositorio()