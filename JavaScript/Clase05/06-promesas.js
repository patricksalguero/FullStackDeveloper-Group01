/*
	Las promesas se crean a partir de la clase "Promise".
	El constructor tiene dos parámetros que son de tipo función:
		1. resolve: es la función que se ejecuta cuando todo está bien.
		2. reject: es la función que se ejecuta cuando algo sale mal.
*/
const promesa = new Promise(
	(resolve, reject) => {
		// Usamos el setTimeout para simular el tiempo que demora la respuesta a un api rest
		setTimeout(()=>{
			console.log("La promesa se cumple")
			// resolve() se cumplió la promesa
			reject({  // la promesa no se cumplió
				codigo: 500,
				estado: "rechazado",
				mensaje: "Error con el servidor"
			})
		}, 3000)
	}
)

promesa.then(()=>{
	// El método "then" se ejecuta si la promesa se cumplió
	console.log("Efectivamente se cumplió la promesa")
}).catch(error =>{
	// El método "catch" se ejecuta si la promesa no se cumplió
	console.log(error.codigo, error.mensaje)
})

console.log("Curso de FullStack")