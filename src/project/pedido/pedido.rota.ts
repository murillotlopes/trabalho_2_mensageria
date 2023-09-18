import { Router } from "express";
import pedidoController from "./pedido.controller";

const pedidoRota = Router()

pedidoRota.get('/filtrar/:uuid', pedidoController.filtrar)
pedidoRota.get('/filtrar', pedidoController.filtrar)

export default pedidoRota