// import {Request, Response, NextFunction} from "express"
import express = require("express")
import {controlador as UsuariosControlador} from '../api/controladores/UsuariosControlador'
import {politicas} from '../api/politicas/autenticacion'

const router = express.Router()

router.get("/listado", UsuariosControlador.listado)
router.get("/insertar", politicas.validacion, UsuariosControlador.insertar)

export {router}