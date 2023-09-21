import { Repository } from 'typeorm';
import { Skua } from './../../entities/produto';
import { AppDataSource } from '../../data-source';

class ProdutoRepositorio {
  private repo: Repository<Skua>
  constructor() {
    this.repo = AppDataSource.getRepository(Skua)
  }

  public async filtrar(id: string) {
    try {
      const query = this.repo.createQueryBuilder('p')
      if (id) query.where('codigo = :uuid', { uuid: id })

      return query.getMany()
    } catch (error) {

    }
  }

  public async salvar(produto: Skua): Promise<Skua> {

    // const skuSalvo = await this.repo.findOne({ where: { id: produto.id } })

    // if (skuSalvo) {
    //   produto.codigo = skuSalvo.codigo
    //   await this.repo.update(skuSalvo.codigo, produto)
    //   return await this.repo.findOne({ where: { id: produto.id } })
    // } else {
    //   return await this.repo.save(produto)
    // }

    return await this.repo.save(produto)


  }
}

export default new ProdutoRepositorio()