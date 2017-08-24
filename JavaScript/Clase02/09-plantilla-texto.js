const nombre = 'Sergio'
const apellido = 'Hidalgo'

/*
	- Las plantillas de texto simplifican la concatenación de elementos.
	- Se deja de usar el "+"
	- Para insertar una variable se usa "${  }"
	- Permiten concatenar usando saltos de línea
	- Se definen usando "`" y no comillas (backstick)
*/
console.log(`
	${nombre} 
	${apellido}
`)
// console.log(nombre + ' ' + apellido)