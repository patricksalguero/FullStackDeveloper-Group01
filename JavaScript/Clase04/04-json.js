// Declaración de un json vacío
const usuario = {}

const nombre = 'Sergio'

// Los json contienen pares-valor (propiedad, valor)
const persona = {
	nombre,
	apellido: 'Hidalgo',
	cursos: ['Javascript', 'Angular', 'Node'],
	horas: 92,
	dias: {
		dias: "lunes, miércoles y sábados",
		jornada: 6
	}
}

console.log(persona)

const arregloPersonas = []
const persona01 = {
	nombre: 'nombre persona 01',
	redes: {
		facebook: "https://facebook.com/persona01",
		twitter: "https://twitter.com/persona01"
	}
}

const persona02 = {
	nombre: 'nombre persona 02',
	redes: {
		twitter: "https://twitter.com/persona02",
		linkedin: "https://linkedin.com/persona02",
		instagram: "https://instagram.com/persona02"
	}
}

arregloPersonas.push(persona01)
arregloPersonas.push(persona02)

console.log(persona02.nombre)

// Se pueden crear propiedades dinámicamente
persona02.nombre = "Javier"
persona02.redes.facebook = "https://facebook.com/persona02"

console.log(persona02["nombre"])
console.log(persona02.redes["facebook"])
console.log(persona02["redes"]["facebook"])

// persona02 = {nombre: "Sergio"} // Esto da error
// Lee los índices de cada propiedad del json
for(propiedad in persona02) {
	console.log(propiedad)
}

