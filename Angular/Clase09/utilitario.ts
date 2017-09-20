export function pasarAMayusculas(texto:string):string{
	return texto.toUpperCase()
}

export class Persona {
	nombre:string
	constructor(nombre:string){
		this.nombre = nombre
	}

	devolverNombre():string {
		return this.nombre
	}
}