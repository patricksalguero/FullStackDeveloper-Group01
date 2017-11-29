import * as fs from 'fs'

const readStream = fs.createReadStream("./archivoReadStream.txt", "utf8")
const writeStream = fs.createWriteStream("./archivoWriteStream.txt", "utf8")

readStream.pipe(writeStream)