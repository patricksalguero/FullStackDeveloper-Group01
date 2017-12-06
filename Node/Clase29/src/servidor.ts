// Declaraciones e importaciones
import express = require("express")
import {Application, Request, Response, NextFunction} from "express"
import morgan = require("morgan")
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import {router as rutasIndex} from '../rutas/index'
import {router as rutasUsuario} from '../rutas/usuarios'

// Configuraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"))

app.use("/", rutasIndex)
app.use("/usuarios", rutasUsuario)


// Rutas




// Servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000")
})
