/*
	Los arreglos se definen con corchetes.
	La definición puede ser vacía
*/
const personas = []

/*
	O no
*/
const personajes = ['Ironman', 'Capitán América', 'Hulk']

/*
	Los arreglos pueden contener elementos con diferentes
	tipos de datos
*/
let datosPersonales = ['Sergio', 48, false]

/*
	La variable "personas" está declarada con "const".
	Para agregar un nuevo valor se usa el método "push".

	Lo que se está haciendo es cambiar su valor mas no se está
	reasignando el tipo de datos
*/
personas.push("Javier")

/*
	Aquí sí da error porque además de definir un valor, estamos
	reasignando el tipo de datos
*/
// personas = ['Andrea', 'Jorge', 50]

console.log(personas)

/*
	Una variable con "let" puede no ser definida en un inicio
*/
let series

/*
	Una variable definida con "const" debe estar definida desde
	un inicio.

	La variable "series" arrojará un error
*/

// const series