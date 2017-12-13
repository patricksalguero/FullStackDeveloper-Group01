import express = require("express")
const router = express.Router()
import {controlador as ctrl} from '../api/controladores/ServidoresControlador'

router.post("/", ctrl.insertar)

export {router}