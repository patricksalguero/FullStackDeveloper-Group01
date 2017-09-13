class Animal{
	constructor(tipo){
		this.tipo = tipo
	}

	descripcion(){
		console.log(`¡Es un ${this.tipo.toUpperCase()}!`)
	}
}

class Perro extends Animal {
	constructor(tipo, familia){
		super(tipo)
		this.familia = familia
	}

	descripcion(){
		super.descripcion()
		console.log(`La familia es ${this.familia}`)
	}
}

const animal = new Animal("Mamífero")
animal.descripcion()

const perro = new Perro("Mamífero", "Pitbull")
perro.descripcion()