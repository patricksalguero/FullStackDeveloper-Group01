import * as http from 'http'

http
	.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		const usuarios = [
			{id: 1, nombre: "Persona1"},
			{id: 2, nombre: "Persona2"}
		]

		res.writeHead(200, { "content-type": "application/json" })
		res.end(JSON.stringify(usuarios))

	})
	.listen(4000, () => {
		console.log("Escuchando en el puerto 4000")
	})