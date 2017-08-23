const cursos = ['JavaScript', 'Angular', 'Node', 'Servidores']

for(let indice = 0; indice < cursos.length; indice++){
	console.log(cursos[indice])
}

cursos.forEach(function(valor, indice){
	console.log(valor)
	console.log(indice)
})

const cursosArea51 = [
	'JavaScript',
	['Manuel', 'Raymi', 'Carlos'],
	true
]

cursosArea51.forEach(function(valor, indice){
	//console.log(valor)
	//console.log(typeof(valor))

	if(typeof(valor)=='object'){
		valor.forEach(function(value, index){
			console.log(value)
		})
	} else {
		console.log(valor)
	}
})

const periodicos = ['El Comercio', 'La República', 'Ojo']

periodicos.forEach(function(valor){
	console.log("Nombre", valor)
})

const radios = ['Exitosa', 'RPP', 'Ovación', 'Studio 92']

for(let item of radios){
	console.log(item)
}

for(let item in radios){
	console.log(item)
}