import * as http from 'http'
import * as fs from 'fs'

const servidor: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {

	fs.readFile("./home.html", (error, texto) => {
		if(error) {
			response.writeHead(500, {"content-type":"text/plain"})
			return response.end("Ocurrió un error")

			// return false
		}

		response.writeHead(200, {"content-type": "text/html"})
		response.end(texto)
	})
})

servidor.listen(4000)