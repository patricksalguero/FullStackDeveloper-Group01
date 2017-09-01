const personas = [
	{id: 1, nombre: 'Javier', apellido: 'Solis', hijos: ['José','Martha','Elena']},
	{id: 2, nombre: 'José Luis', apellido: 'Perales', hijos:['Alejandra']},
	{id: 3, nombre: 'Paulina', apellido: 'Rubio', hijos:[]},
	{id: 4, nombre: 'Alejandra', apellido: 'Guzmán', hijos:['Marcela','Ana']}
]

const tbody = document.querySelector('tbody')

const hijosComponent = function(hijos){
	return hijos.map((item, indice) => {
		return `
			${indice+1}: ${item}
			<br>
		`
	}).join("")
}

const personaFilaComponent = function(persona){
	return `
		<tr>
			<td>${persona.id}</td>
			<td>${persona.nombre}</td>
			<td>${persona.apellido}</td>
			<td>${hijosComponent(persona.hijos)}</td>
		</tr>
	`
}

const baseComponent = function(arr){
	return arr.map(item => {
		return personaFilaComponent(item)
	}).join("")
}

tbody.innerHTML = baseComponent(personas)