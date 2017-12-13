// Declaraciones e importaciones
import express = require("express")
import {Application, Request, Response, NextFunction } from "express"
import {router as rutasPorDefecto} from '../rutas/index'
import {router as rutasServidores} from '../rutas/servidores'
import {conexionMongo} from "../configuraciones/conexiones"
import mongoose = require("mongoose")
import bodyParser = require("body-parser")

// Configuraciones
const app: Application = express()
app.set("puerto", 4000)
app.set("view engine", "pug")
app.set("views", "./vistas")

mongoose.Promise = global.Promise
mongoose.connect(conexionMongo, {
	useMongoClient: true
}, error => {
	if(error) {
		console.log(error)
	} else {
		console.log("conectado a Mongo")
	}
})

// Middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("publico"))

// Rutas
app.use((req: Request, res: Response, next: NextFunction) => {
	res.locals.titulo = "Inventario de Servidores"
	next()
})
app.use("/", rutasPorDefecto)
app.use("/servidores", rutasServidores)


// Servidor
app.listen(app.get("puerto"), ()=> {
	console.log(`Ejecutando en el puerto ${app.get("puerto")}`)
})
