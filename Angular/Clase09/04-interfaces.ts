interface usuario {
	nombre:string,
	id:number,
	estado?:boolean
}

const imprimirListaUsuarios = (obj:usuario) => {
	console.log(obj.nombre)
	console.log(obj.id)
	console.log(obj.estado)
}

imprimirListaUsuarios({nombre: "Sergio", id:100, estado: true})

interface factura {
	costo:number,
	igv:number,
	propina?: number
}

const calcularFactura = (obj:factura) => {
	console.log(obj.igv)
}

interface datosUsuario {
	readonly nombre:string,
	readonly apellido:string
}

const cargarDatosUsuario = (obj:datosUsuario) => {
	const nombre = obj.nombre
	// obj.nombre = "Nuevo nombre"  //Esto da error
}

interface misFunciones {
	(nombre:string, apellido:string):string
}

const listaFunciones:misFunciones = function(nom:string, apellido:string):string {
	return `${nom} ${apellido}`
}

interface reloj {
	zonaHoraria: string,
	configurarHora(d:Date):string
}

class Reloj implements reloj {
	zonaHoraria = "America\Lima"

	configurarHora(d:Date){
		return "Hora"
	}
}

class Animal {
	raza:string

	constructor(raza:string){
		this.raza = raza
	}

	obtenerDatos():string {
		return this.raza
	}
}

class Mamifero extends Animal {
	tipo:string 

	constructor(tipo:string, raza:string){
		super(raza)
		this.tipo = tipo
	}

	obtenerDatos():string {
		return `${this.tipo} de raza ${super.obtenerDatos()}`
	}
}

const mamifero = new Mamifero("ballena", "cetaceo")
console.log(mamifero.tipo)
console.log(mamifero.obtenerDatos())
