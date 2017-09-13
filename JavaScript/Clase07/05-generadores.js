function* lista(){
	console.log("Parte 1")
	yield "Parada 1"

	console.log("Parte 2")
	yield "Parada 2"

	console.log("Parte 3")
	yield "Parada 3"

	console.log("Parte 4")
	yield "Parada 4"

	console.log("Parte 5")
	yield "Parada 5"
}

const elementos = lista()