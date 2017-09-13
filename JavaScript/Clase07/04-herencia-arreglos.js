class Pelicula extends Array {
	constructor(frase, actores,  ...pelas){
		super(...pelas)
		this.frase = frase
		this.actores = actores
	}

	mostrarActores(){
		console.log(this.actores)
	}

	agregar(pela, ...actores){
		this.push(pela)
		// this.push(actores)
		this.push(...actores)
	}

	top(limite=3){
		return this.sort((a, b)=> a.puntaje > b.puntaje ? -1 : 1).slice(0, limite)
	}
}



const peliculas = new Pelicula(
	'Las mejores películas',
	["Angelina Jolie", "Nicole Kidman", "Anthony Hopkins"],
	{titulo: "El Gladiador", puntaje: 10},
	{titulo: "El Origen", puntaje: 5},
	{titulo: "Milagros inesperados", puntaje:7},
	{titulo: "Del crepúsculo al amanecer", puntaje: 4},
	{titulo: "Ben Hur", puntaje: 9}
)