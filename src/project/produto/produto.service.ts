import produtoRepositorio from "./produto.repositorio"

class ProdutoService {
  public async filtrar(id: string) {
    try {
      return await produtoRepositorio.filtrar(id)
    } catch (error) {

    }
  }
}

export default new ProdutoService()