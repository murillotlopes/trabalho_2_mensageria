import { Response, Request } from 'express';
import produtoService from "./produto.service"

class ProdutoController {
  public async filtrar(req: Request, res: Response) {
    try {
      return res.json(await produtoService.filtrar(req.params.id))
    } catch (err) {

    }
  }
}

export default new ProdutoController()