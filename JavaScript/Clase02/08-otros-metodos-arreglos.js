const personas = ['Sergio', 'Alejandro', 'Marjorie', 'Nadir']

const saludos = personas.map(item => {
	return "Hola " + item
})

console.log(saludos)

const edades = [10, 20, 30, 40, 60, 80]
const mayoresEdad = edades.filter(item => {
	return item >= 18
})

console.log(mayoresEdad)

const todosMayoresEdad = edades.every(item => {
	return item >= 18
})

console.log(todosMayoresEdad)

const algunMenorEdad = edades.some(item => {
	return item < 18
})

console.log(algunMenorEdad)

const nombres = ['Tania', 'Abelardo', 'Joaquín', 'Bernardo']

const nombresOrdenados = nombres.sort((elem01, elem02) => {
	return elem01 < elem02
})

console.log(nombresOrdenados)




