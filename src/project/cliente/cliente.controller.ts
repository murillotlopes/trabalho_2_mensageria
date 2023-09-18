import { Response, Request } from 'express';
import clienteService from './cliente.service';


class ClienteController {
  public async filtrar(req: Request, res: Response) {
    try {
      return res.json(await clienteService.filtrar(req.params.id))
    } catch (err) {

    }
  }
}

export default new ClienteController()