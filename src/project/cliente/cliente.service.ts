import clienteRepositorio from "./cliente.repositorio"

class ClienteService {
  public async filtrar(id: string) {
    try {
      return await clienteRepositorio.filtrar(id)
    } catch (error) {

    }
  }
}

export default new ClienteService()