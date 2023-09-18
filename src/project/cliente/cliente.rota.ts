import { Router } from "express";
import clienteController from "./cliente.controller";


const clienteRota = Router()

clienteRota.get('/filtrar/:id', clienteController.filtrar)
clienteRota.get('/filtrar', clienteController.filtrar)

export default clienteRota