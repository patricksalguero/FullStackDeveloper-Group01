import * as http from 'http'
import * as fs from 'fs'

const servidor: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

	res.writeHead(200, {"content-type": "text/html"})

	const readStream = fs.createReadStream("./home.html", "utf8")

	readStream.pipe(res)
})

servidor.listen(4000)