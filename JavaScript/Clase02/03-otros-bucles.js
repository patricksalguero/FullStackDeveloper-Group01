const cursos = ['JavaScript', 'Angular', 'Node', 'Servidores']

/*
	Los arreglos tienen propiedades y métodos implícitos.
	La propiedad "length" devuelve la cantidad de items que
	contiene un arreglo.

	Ejemplo: cursos.length devuelve 4
*/
for(let indice = 0; indice < cursos.length; indice++){
	// Para acceder a un item determinado de un arreglo 
	// se usan los corchetes y el índice del item.
	// Los índices siempre empiezan en cero
	console.log(cursos[indice])
}

/*
	Una alternativa al "for" es el "forEach".
	Características: 
			- no hay que setear el límite de bucles 
			- tampoco hay que indicar que cuando termine un bucle se pase al siguiente.
			- los bucles se pasan de uno en uno. No se puede pasar de 2 en 2, ni de 3 en 3, etc.

	Parámetros: 
			- Tiene un único parámetro. 
			- El parámetro es una función.
			- Esa función se ejecuta tantas veces como items tenga el arreglo
			- Esa función tiene a su vez dos parámetros:
				1. Valor: el valor del item del arreglo
				2. Índice: el índice que corresponde al item dentro del arreglo

*/
cursos.forEach(function(valor, indice){
	console.log(valor)
	console.log(indice)
})

/*
	Los arreglos pueden contener elementos de distintos tipos de datos.
	Incluidos otros arreglos.	
*/

const cursosArea51 = [
	'JavaScript',
	['Manuel', 'Raymi', 'Carlos'],
	true
]

cursosArea51.forEach(function(valor, indice){
	//console.log(valor)
	//console.log(typeof(valor))

	/*
		La función "typeof" devuelve el tipo de datos del valor
		especificado como parámetro.

		Ejemplo:
			- typeof(20) devuelve "number"
			- typeof("estamos en invierno") devuelve "string"
			- typeof([10, 15, 50]) devuelve "object"
	*/

	/*
		El operador lógico "==" compara los valores de dos miembros.
		Si los valores son iguales, devuelve true. Sino devuelve false

		Ejemplos:
			- "abc" == "abc" devuelve true
			- 30 == 30 devuelve true
			- "30" == 30 devuelve true (el valor es el mismo aunque el tipo de dato no)
			- 0 == false devuelve true porque el "0" se interpreta como false
			- 10 == "diez" devuelve false

		El operador lógico "===" compara los valores de dos miembros así como también sus tipos de datos

		Ejemplos:
			- "abc" === "abc" devuelve true
			- 30 === 30 devuelve true
			- "30" === 30 devuelve false
			- 0 === false devuelve false
			- 10 == "diez" devuelve false
	*/
	if(typeof(valor)=='object'){
		valor.forEach(function(value, index){
			console.log(value)
		})
	} else {
		console.log(valor)
	}
})

const periodicos = ['El Comercio', 'La República', 'Ojo']


/*
	En javascript se pueden no usar algunos parámetros.
	Por ejemplo: 
		- La función del forEach de abajo usa solo el primer parámetro e ignora el segundo.
		- La función sabe que el parámetro que queda es el primer parámetro con el cual está definida.
		- Lo que no podemos hacer es ignorar el primer parámetro y asumir que la función "interpretará" que el parámetro que queda es el índice. No funciona así. La función asume que el parámetro que queda es el primer parámetro con el cual está definida.

*/
periodicos.forEach(function(valor){
	console.log("Nombre", valor)
})

const radios = ['Exitosa', 'RPP', 'Ovación', 'Studio 92']

/*
	Existe también el "for... of".
	Este es similar al "forEach" y nos devuelve solo el valor del elemento de la lista
*/

for(let item of radios){
	console.log(item)
}

/*
	Existe también el "for... in".
	Similar al "forEach" pero no devuelve el valor del elemento de la lista, devuelve el índice del elemento dentro de la lista
*/

for(let item in radios){
	console.log(item)
}