// Boleano
let finJuego:boolean = false

// Númericos
let pi:number = 3.1416
let color:number = 0xffcc00
let edad:number = 40

// Textos
let usuarioNombre:string = "Javier Pérez"
usuarioNombre = "María Calderón"

// Arreglos
const alumnos:string[] = ["Alumno1", "Alumno2", "Alumno3"]
const profesores:Array<string> = ["Profesor1", "Profesor2", "Profesor3"]

// Tuplas
let curso:[string, number]
curso = ["Angular",10]
let cursos:Array<[string, number]>
let universidades:[string, number][]

// Enumeraciones
enum listaErrores {
	error404 = 404,
	error500 = 500,
	error409 = 409
}

// Any
let cualquierCosa:any = "cadena"
cualquierCosa = 100
cualquierCosa = {nombre:"Andrea"}

// Void
function advertencia():void {
	console.log("advertencia")
}

let nohaceNada:void = undefined

// Never
function manejadorErrores():never {
	throw new Error()
}

let saludoDia:any = "Hola, buen día"
console.log((saludo as string).length)

let numeroPI:any = 3.1416
console.log((numeroPI as string).length)


