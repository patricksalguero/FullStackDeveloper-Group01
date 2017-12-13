import express = require("express")
import { Request, Response, NextFunction } from "express"
import {controlador as ctrl} from "../api/controladores/ServidoresControlador"
const router = express.Router()

router.get("/", ctrl.listado)
router.get("/formulario", ctrl.formulario)

export {router}