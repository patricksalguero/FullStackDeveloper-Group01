import * as http from "http"
import * as fs from "fs"

http
	.createServer(
	(req: http.IncomingMessage, res: http.ServerResponse) => {
		const url = req.url.toLowerCase()

		console.log(req)

		if (url === "/") {
			res.writeHead(200, { "content-type": "text/html" })

			fs
				.createReadStream("./home.html", "utf8")
				.pipe(res)
		} else if (url === "/usuarios") {
			const usuarios = [
				{ id: 1, nombre: "Nombre 1" },
				{ id: 2, nombre: "Nombre 2" }
			]

			res.writeHead(200, { "content-type": "application/json" })
			res.end(JSON.stringify(usuarios))
		} else if (url === "/manual") {
			res.writeHead(200, { "content-type": "application/pdf" })

			fs
				.createReadStream("./manual.pdf")
				.pipe(res)
		} else if(url === "/estado") {
			res.writeHead(200, {"content-type": "text/plain; charset='utf8'"})
			res.end("Todo está ok")
		} else {
			res.writeHead(404, {"content-type": "text/html"})
			res.end("<strong>Ruta no encontrada</strong>")
		}
	}
	)
	.listen(4000, () => {
		console.log("Escuchando en el puerto 4000")
	})