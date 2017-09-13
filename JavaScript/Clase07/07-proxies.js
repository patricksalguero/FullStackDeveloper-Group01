const usuario = {
	nombre: "Angelina",
	edad: 45
}

const proxyUsuario = new Proxy(usuario, {
	get(objetivo, propiedad){
		return `Hola ${objetivo[propiedad]}`
	},
	set(objetivo, propiedad, valor) {
		objetivo[propiedad] = valor.toUpperCase()
	}
})

console.log(proxyUsuario.nombre)
proxyUsuario.nombre = "Nicole"
console.log(proxyUsuario.nombre)
usuario.nombre = "Ann"
console.log(proxyUsuario.nombre)

const datosUsuario = {
	nombre: "Sergio",
	edad: 40,
	correo: "sergiohidalgocaceres@gmail.com"
}

const manejador = {
	get(objetivo, propiedad){
		return objetivo[propiedad]
	},
	set(objetivo, propiedad, valor){
		if(propiedad==="correo"){
			const correoValido = valor.match(/^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/g)

			if(correoValido) {
				objetivo[propiedad] = valor
			} else {
				throw new TypeError("No es un correo válido")
			}
		}
	}
}

const proxyDatosUsuario = new Proxy(datosUsuario, manejador)
proxyDatosUsuario.correo = "abc@area51.pe"
console.log(proxyDatosUsuario.correo)


const manejadorValidador = {
	get(objetivo, propiedad){
		return objetivo[propiedad]
	},
	set(objetivo, propiedad, valor){
		if(typeof valor === "string") {
			objetivo[propiedad] = valor.trim().toUpperCase()
		} else if(typeof valor === "number" && !isNaN(valor) && valor > 10){
			objetivo[propiedad] = valor
		}
	}
}

const proxyCursos = new Proxy({}, manejadorValidador)
proxyCursos.titulo = "      FullStack        "
console.log(proxyCursos.titulo)
proxyCursos.duracion = 1
console.log(proxyCursos.duracion)