const serie = [1, 2, 3, 4, 5, 6]

// El método "reduce" permite acumular en el primer parámetro. En este caso llamado "acumulado".

/*
	El método "reduce" tiene dos parámetros:
		1. La función que evalúa cada elemento del arreglo.
		2. El valor inicial que tendrá la variable "acumulado".
*/

/*
	Inicialmente "acumulado" = 0
	Pasada 1: acumulado = acumulado + 1 = 1
	Pasada 2: acumulado = acumulado + 2 = 3
	Pasada 3: acumulado = acumulado + 3 = 6
	Pasada 4: acumulado = acumulado + 4 = 10
	Pasada 5: acumulado = acumulado + 5 = 15
	Pasada 6: acumulado = acumulado + 6 = 21

	suma = 21

	No olvidar retornar siempre algo. Ese algo es el valor de "acumulado" de la siguiente pasada.
*/

const suma = serie.reduce((acumulado, item) => {
	return acumulado + item
}, 0)

console.log(suma)

/*let acumulado = 0
serie.forEach(item => {
	acumulado += item
})*/

const cursos = ["Angular", "Node2", "Javascript", "NativeScript", "Node2","Angular", "Angular", "Javascript"]


// El "acumulado" no tiene porqué ser siempre un número. Puede ser del tipo que querramos.

// Ejemplo: json
const resultados = {}

/*
	resultados = {
		Angular: 3,
		Node: 2,
		Javascript: 2,
		NativeScript: 1
	}

	resultados.Angular
	resultados["Angular"]
*/
console.log("==============")
const reducido = cursos.reduce((acumulado, item) => {
	/*if(acumulador[item]){
		acumulador[item] += 1
	} else {
		acumulador[item] = 1
	}*/

	/* 
		Inicialmente "acumulado" será igual a {}

		Si acumulado[item] no existe, entonces se lo crea y se le asigna el valor de 1.

		Si acumulado[item] existe, entonces se le aumenta en 1 su valor.
	*/


	acumulado[item] = acumulado[item] ? ++acumulado[item] : 1

	return acumulado
}, {})

console.log(reducido)

