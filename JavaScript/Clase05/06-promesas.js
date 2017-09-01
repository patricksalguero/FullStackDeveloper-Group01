const promesa = new Promise(
	(resolve, reject) => {
		setTimeout(()=>{
			console.log("La promesa se cumple")
			// resolve()
			reject({
				codigo: 500,
				estado: "rechazado",
				mensaje: "Error con el servidor"
			})
		}, 3000)
	}
)

promesa.then(()=>{
	console.log("Efectivamente se cumplió la promesa")
}).catch(error =>{
	console.log(error.codigo, error.mensaje)
})

console.log("Curso de FullStack")