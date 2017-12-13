import {Request, Response, NextFunction} from "express"
import Servidor from '../modelos/ServidorModelo'

/*const servidores = [
	{_id: "1", nombre: "Web", descripcion: "Servidor del Proyecto de Gas Natural"},
	{_id: "2", nombre: "BD", descripcion: "Servidor de Backup"},
	{_id: "3", nombre: "Seguridad", descripcion: "Servidor usado como proxy"}
]*/

const controlador = {
	listado: (req: Request, res: Response, next: NextFunction) => {
		Servidor
			.find({})
			.then(servidores => {
				res.render("home", {
					servidores: servidores
				})
			})
			.catch(error => {
				console.log(error)
				res.send(error)
			})
	},

	formulario: (req: Request, res: Response, next: NextFunction) => {
		res.render("formulario")
	},

	insertar: (req: Request, res: Response, next: NextFunction) => {
		const servidor = new Servidor()
		servidor["nombre"] = req.body.nombre
		servidor["descripcion"] = req.body.descripcion

		servidor
			.save()
			.then(registro => {
				res.redirect("/")
			})
			.catch(error => {
				res.send(error)
			})
	}
}

export {controlador}