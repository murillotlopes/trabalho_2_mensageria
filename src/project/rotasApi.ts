import { Express } from 'express'
import pedidoRota from './pedido/pedido.rota'
import clienteRota from './cliente/cliente.rota'
import produtoRota from './produto/produto.rota'

const registroRotas = (app: Express): void => {
	app.use('/pedido', pedidoRota)
	app.use('/cliente', clienteRota)
	app.use('/produto', produtoRota)
}

export default registroRotas