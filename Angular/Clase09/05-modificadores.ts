class AnimalTerrestre {
	private raza:string
	protected periodo:string

	constructor(raza:string){
		this.raza = raza
		this.periodo = "jurásico"
	}

	obtenerDatos():string {
		return this.raza
	}
}

class MamiferoTerrestre extends AnimalTerrestre {
	// public tipo:string 
	private tipo:string

	constructor(tipo:string, raza:string){
		super(raza)
		this.tipo = tipo
	}

	obtenerDatos():string {
		console.log(this.periodo)
		return `${this.tipo}`
		// return `${this.tipo} de raza ${this.raza}` // Da error
	}
}

const obj = new MamiferoTerrestre("ballena","cetaceo")
// console.log(obj.tipo) // Da error
//console.log(obj.periodo)  // Da error


class CursosArea51 {
	static codigoMinisterio:number = 100

	static listarUsuarios():void {
		console.log("lista de usuarios")
	}
}

console.log(CursosArea51.codigoMinisterio)
console.log(CursosArea51.listarUsuarios())