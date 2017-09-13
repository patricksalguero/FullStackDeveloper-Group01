function Animal(tipo, familia){
	this.tipo = tipo
	this.familia = familia

	/*this.descripcion = function(){
		console.log("Este es un animal de tipo " + this.tipo + " de la familia " + this.familia)
	}*/
}

Animal.prototype.descripcion = function(){
	console.log("Este es un animal de tipo " + this.tipo + " de la familia " + this.familia)
}

Animal.prototype.descripcion = function(){
	console.log("¡Es un " + this.familia + "!")
}

var animal = new Animal("Mamífero", "Caninos")
animal.descripcion()