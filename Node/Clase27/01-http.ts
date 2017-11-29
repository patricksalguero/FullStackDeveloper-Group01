import * as http from 'http'

const servidor: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {

/* 	response.writeHead(200, {"content-type": "text/plain"})
	response.end("Mensaje enviado desde el servidor") */

	response.writeHead(200, {"content-type": "text/html"})
	response.end("<h1>Respuesta enviada por el servidor</h1>")
})

servidor.listen(4000)