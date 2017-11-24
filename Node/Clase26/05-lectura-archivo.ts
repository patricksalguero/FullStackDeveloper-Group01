
import * as fs from 'fs';

const texto = fs.readFileSync("./archivoALeer.txt", "utf8")
// console.log(new Date())
console.log(texto)

fs.readFile("./archivoALeer.txt", "utf8", (error, data)=>{
	if(error) {
		console.log(error)
		return false
	}
	fs.writeFile("archivoAEscribir.txt", data, {encoding: "utf8", flag: "w+"}, error => {
		if(error) console.log(error)

		return false
	})
})

