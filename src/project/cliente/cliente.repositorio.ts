import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Cliente } from "../../entities/cliente"

class ClienteRepositorio {
  private repo: Repository<Cliente>
  constructor() {
    this.repo = AppDataSource.getRepository(Cliente)
  }

  public async filtrar(id: string) {
    try {
      const query = this.repo.createQueryBuilder('c')
        .addSelect('p')
        .innerJoin('c.pedidos', 'p')
      if (id) query.where('c.id = :id', { id: id })

      return await query.getMany()
    } catch (error) {

    }
  }

  public async salvar(cliente: Cliente): Promise<Cliente> {
    try {
      return this.repo.save(cliente)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

export default new ClienteRepositorio()