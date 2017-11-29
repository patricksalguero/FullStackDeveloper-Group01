import * as http from 'http'
import * as fs from 'fs'

http
	.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

		res.writeHead(200, { "content-type": "application/pdf" })

		const readStream = fs.createReadStream("./manual.pdf")

		readStream.pipe(res)
	})
	.listen(4000, () => {
		console.log("Escuchando en el puerto 4000")
	})