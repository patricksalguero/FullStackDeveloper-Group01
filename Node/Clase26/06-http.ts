import * as http from 'http'

console.log(new Date())

const servidor: http.Server = http.createServer(
	(req: http.IncomingMessage, res: http.ServerResponse) => {

		res.writeHead(200, {"content-type": "text/plain"})
		res.end("Respuesta del servidor")
	}
)

servidor.listen(4000)