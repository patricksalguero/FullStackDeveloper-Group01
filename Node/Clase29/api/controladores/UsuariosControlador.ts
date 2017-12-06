import {Request, Response, NextFunction} from 'express'

const controlador = {
	listado: (req: Request, res: Response, next: NextFunction) => {
		res
			.status(200)
			.type("text/plain")
			.send("Ruta listado")
	},

	insertar: (req: Request, res: Response, next: NextFunction) => {
		res
			.status(200)
			.type("text/plain")
			.send("Ruta insertar")
	}
}

export {controlador}