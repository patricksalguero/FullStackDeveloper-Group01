import * as fs from 'fs'

const readStream = fs.createReadStream("./archivoReadStream.txt", "utf8")
const writeStream = fs.createWriteStream("./archivoWriteStream.txt", "utf8")

readStream.on("data", chunk => {
	console.log("==============")
	console.log("Leyó un chunk")
	// console.log(chunk)

	writeStream.write(chunk)
})