class Animal {
	constructor(tipo, familia){
		this.tipo = tipo
		this.familia = familia
		this.felino = "Jaguar"
	}

	descripcion(){
		console.log(`Es un ${this.tipo} de la familia de los ${this.familia}`)
	}

	get ejemploFelino(){
		return `El ${this.felino} es un ejemplo de felino`
	}

	set ejemploFelino(felino) {
		this.felino = felino
	}

	static info(){
		console.log(`Esta es una clase de Animales`)
		console.log(`INFO: Ejemplo de felino: ${this.felino}`) // No se puede acceder ni a las propiedades ni a los métodos de la clase
	}
}

const animal = new Animal("Mamífero", "Caninos")
animal.descripcion()
console.log(animal.ejemploFelino)
animal.ejemploFelino = "León"
console.log(animal.ejemploFelino)
// animal.info() // Error
Animal.info()
console.log(Animal.familiaOriginal)


// const claAnimal = class {}