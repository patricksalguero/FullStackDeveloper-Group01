// Declaración de una función de la forma tradicional
function nombreCompleto(nombre, apellido){
	return nombre + ' ' + apellido
}

// Creación de una función y asignación a una variable
const nombreCompleto = function(nombre, apellido){
	return nombre + ' ' + apellido
}

const h1 = document.querySelector('h1')

// Definición de un evento "click" a una etiqueta "h1"
h1.addEventListener("click", function(){
	console.log("Hiciste clic")
})

// Declaración y definición de una función flecha
const nombreCompleto = (nombre, apellido) => {
	return nombre + ' ' + apellido
}

// Simplificación de la función flecha
const nombreCompleto = (nombre, apellido) => { nombre + ' ' + apellido}

const obtieneDNI = (id) => { '07974521'}

// Si la función tienen solo un parámetro, se pueden obviar los parántesis.
const obtieneDNI = id => { '07974521'}



nombreCompleto()