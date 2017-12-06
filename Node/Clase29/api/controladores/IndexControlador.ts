import {Request, Response, NextFunction} from 'express'

const controlador = {
	get: (req: Request, res: Response, next: NextFunction) => {
		res.render("home", {
			titulo: "Curso de FullStack en Javascript en Area51",
			cursos: ["Javascript", "Angular", "Node"],
			alumnos: [
				{id: 1, nombre: "Alumno 1"},
				{id: 2, nombre: "Alumno 2"},
				{id: 3, nombre: "Alumno 3"}
			]
		})
	},

	post: (req: Request, res: Response, next: NextFunction) => {
		res.send(req.body)
	},

	put: (req: Request, res: Response, next: NextFunction) => {
		res.send(req.body)
	}
}

export {controlador}
