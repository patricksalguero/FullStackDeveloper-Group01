import {Request, Response, NextFunction} from "express"
import express = require("express")
import {controlador as IndexControlador} from '../api/controladores/IndexControlador'

const router = express.Router()

router.get("/", IndexControlador.get)
router.post("/", IndexControlador.post)
router.put("/", IndexControlador.put)

export {router}