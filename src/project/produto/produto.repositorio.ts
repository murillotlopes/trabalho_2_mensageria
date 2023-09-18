import { Repository } from 'typeorm';
import { Produto } from './../../entities/produto';
import { AppDataSource } from '../../data-source';

class ProdutoRepositorio {
  private repo: Repository<Produto>
  constructor() {
    this.repo = AppDataSource.getRepository(Produto)
  }

  public async filtrar(id: string) {
    try {
      const query = this.repo.createQueryBuilder('p')
      if (id) query.where('id = :uuid', { uuid: id })

      return query.getMany()
    } catch (error) {

    }
  }

  public async salvar(produto: Produto): Promise<Produto> {
    return this.repo.save(produto)
  }
}

export default new ProdutoRepositorio()