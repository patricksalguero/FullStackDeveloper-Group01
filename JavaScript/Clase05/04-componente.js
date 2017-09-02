const personas = [
	{id: 1, nombre: 'Javier', apellido: 'Solis', hijos: ['José','Martha','Elena']},
	{id: 2, nombre: 'José Luis', apellido: 'Perales', hijos:['Alejandra']},
	{id: 3, nombre: 'Paulina', apellido: 'Rubio', hijos:[]},
	{id: 4, nombre: 'Alejandra', apellido: 'Guzmán', hijos:['Marcela','Ana']}
]

const tbody = document.querySelector('tbody')

// Simula rudimentariamente el comportamiento de los componentes de Angular

const hijosComponent = function(hijos){
	// Genera una lista con los hijos
	return hijos.map((item, indice) => {
		return `
			${indice+1}: ${item}
			<br>
		`
	}).join("")
}

const personaFilaComponent = function(persona){
	// Devuelve una fila de un tabla html.
	// Llama al componente "hijos" para mostrar una lista de los hijos de cada persona.
	return `
		<tr>
			<td>${persona.id}</td>
			<td>${persona.nombre}</td>
			<td>${persona.apellido}</td>
			<td>${hijosComponent(persona.hijos)}</td>
		</tr>
	`
}

// Crea un componente base que recibe el arreglo "personas" como parámetro.
const baseComponent = function(arr){
	return arr.map(item => {
		// Llama al componente "personaFila" para crear una fila.
		return personaFilaComponent(item)
	}).join("")
}

tbody.innerHTML = baseComponent(personas)