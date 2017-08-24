/*
	Problema con el objeto "this".
	El objeto "this" hace referencia a su contexto.
	Cada clase y función tradicional crea su propio objeto "this"

	Para solucionar el problema, se creó un parche:
		var self = this


function Persona(){
	this.edad = 40

	var self = this

	setTimeout(function(){
		self.edad++
		console.log(self.edad)
	}, 1000)
}
*/


/*
	Con la función flecha se solucionó realmente el problema.
	En una función flecha, el objeto "this" hace referencia al contexto de su contenedor
*/
function Persona(){
	this.edad = 40

	setTimeout(() => {
		this.edad++
		console.log(this.edad)
	}, 1000)
}

const persona = new Persona()
persona.edad++