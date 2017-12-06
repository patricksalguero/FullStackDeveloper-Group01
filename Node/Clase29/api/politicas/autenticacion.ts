import {Request, Response, NextFunction} from 'express'

const politicas = {
	validacion: (req: Request, res: Response, next: NextFunction) => {
		const autenticado = req.query.autenticado || ''

		if(autenticado!="si") {
			return res
				.status(200)
				.type("text/plain; charset='utf8'")
				.send("No está autenticado")
		}

		next()
	}
}

export {politicas}