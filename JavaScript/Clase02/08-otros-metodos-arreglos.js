const personas = ['Sergio', 'Alejandro', 'Marjorie', 'Nadir']

// El método "map" procesa todos los items de un arreglo y devuelve un nuevo arreglo
const saludos = personas.map(item => {
	return "Hola " + item
})

console.log(saludos)

// El método "filter" devuelve un nuevo arreglo filtrado con una condición
const edades = [10, 20, 30, 40, 60, 80]
const mayoresEdad = edades.filter(item => {
	return item >= 18
})

console.log(mayoresEdad)

// El método "every" devuelve "true" si todos los elementos del arreglo cumple con una condición
const todosMayoresEdad = edades.every(item => {
	return item >= 18
})

console.log(todosMayoresEdad)

// El método "some" devuelve "true" si al menos un elemento del arreglo cumple con la condición
const algunMenorEdad = edades.some(item => {
	return item < 18
})

console.log(algunMenorEdad)

const nombres = ['Tania', 'Abelardo', 'Joaquín', 'Bernardo']

// El método "sort" devuelve un nuevo arreglo ordenado según una condición
const nombresOrdenados = nombres.sort((elem01, elem02) => {
	return elem01 < elem02
})

console.log(nombresOrdenados)




