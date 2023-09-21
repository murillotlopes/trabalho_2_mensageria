import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Customera } from "../../entities/cliente"

class ClienteRepositorio {
  private repo: Repository<Customera>
  constructor() {
    this.repo = AppDataSource.getRepository(Customera)
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

  public async salvar(cliente: Customera): Promise<Customera> {
    try {
      return this.repo.save(cliente)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}

export default new ClienteRepositorio()