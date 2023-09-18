import { Router } from "express";
import produtoController from "./produto.controller";

const produtoRota = Router()

produtoRota.get('/filtrar/:id', produtoController.filtrar)
produtoRota.get('/filtrar', produtoController.filtrar)

export default produtoRota