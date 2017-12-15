import jwt = require("jwt-simple")
import moment = require("moment")
import { miClave } from '../../configuraciones/clave'

const crearToken = (id) => {
	const payload = {
		sub: id,
		iat: moment().unix(),
		exp: moment().add(1, "days").unix()
	}

	const token = jwt.encode(payload, miClave)

	return token
}

const decodificarToken = (token) => {
	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, miClave)
	
			if (payload.exp <= moment().unix()) {
				reject({
					status: 401,
					mensaje: "El token ha expirado"
				})
			}

			resolve(payload.id)
			
		} catch (error) {
			reject({
				status: 409,
				mensaje: "El token es inválido"
			})
		}
	})

	return promesa
}



export { crearToken, decodificarToken }