import { Response, Request } from 'express';
import pedidoService from './pedido.service';

class PedidoController {
  public async filtrar(req: Request, res: Response) {
    try {
      const resultado = await pedidoService.filtrar(req.params.uuid)
      return res.json(resultado)
    } catch (err) {

    }
  }
}

export default new PedidoController()