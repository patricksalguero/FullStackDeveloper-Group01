/*function Persona(){
	this.edad = 40

	var self = this

	setTimeout(function(){
		self.edad++
		console.log(self.edad)
	}, 1000)
}*/

function Persona(){
	this.edad = 40

	setTimeout(() => {
		this.edad++
		console.log(this.edad)
	}, 1000)
}

const persona = new Persona()
persona.edad++