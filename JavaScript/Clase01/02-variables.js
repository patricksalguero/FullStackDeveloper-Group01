// "var" genera una variable global
var nombre = 'Area51'

// "var" permite declarar una variable. 
// Declarar no es lo mismo que definir

console.log(nombre)

console.log(apellido)

if(true){
	/*
		Si se define una variable con "var" dentro de una estructura de control. 
		La variable siempre será global.

		Esto último es producto de la "elevación de variables" o "hoising"

		Supongamos que colocamos la siguiente línea dentro de este "if":

			var apellido

		El console.log() de la línea 7 nos dará como resultado "undefined" (indefinido). 
		"undefined" significa que no se le ha asignado ningún valor aún.

		Pero no nos dirá que no está declarada la variable porque la declaración de la variable ha sido
		"elevada" al comienzo del archivo, es decir, su declaración se mueve automáticamente al inicio de este archivo


	*/

	apellido = 'Hidalgo'

/*
	"let" sirve para declarar una variable.
	La diferencia con "var" es que las variables declaradas con "var" solo existen en su ámbito.

	A continuación se declara y se define la variable "local".
	Esta declaración y su definición solo existirán dentro del "if"
*/

	let local = 'Area51 San Isidro'

}

console.log(local) // Error porque la variable "local" solo existe dentro del "if"

/*
	"const" es similar a "let" con dos diferencias: 
		1. No se puede reasignar el tipo de dato dado inicialmente
		2. No se puede declarar la variable con "const" y no asignarle un valor inicial

	En tipos de datos primitivos (texto, números, boleanos) asignar un valor implica también reasignar el tipo de datos. 
	Así el nuevo tipo reasignado sea igual al inicial de la variable
*/
const curso = 'FullStack'
curso = false
console.log(curso)

