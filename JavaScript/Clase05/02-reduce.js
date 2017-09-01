const serie = [1, 2, 3, 4, 5, 6]

const suma = serie.reduce((acumulado, item) => {
	return acumulado + item
}, 0)

console.log(suma)

/*let acumulado = 0
serie.forEach(item => {
	acumulado += item
})*/

const cursos = ["Angular", "Node2", "Javascript", "NativeScript", "Node2","Angular", "Angular", "Javascript"]

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
const reducido = cursos.reduce((acumulador, item) => {
	/*if(acumulador[item]){
		acumulador[item] += 1
	} else {
		acumulador[item] = 1
	}*/

	acumulador[item] = acumulador[item] ? ++acumulador[item] : 1

	return acumulador
}, {})

console.log(reducido)

