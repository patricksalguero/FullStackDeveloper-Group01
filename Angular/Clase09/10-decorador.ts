function Curso(target:any){
	Object.defineProperty(target.prototype,"nombreAlumno", {
		value: ()=>{
			return "Sergio Hidalgo"
		}
	})
}

@Curso
class alumno{
	nombre:string
	apellido:string

	constructor(nombre:string, apellido:string){
		this.nombre = nombre
		this.apellido = apellido
	}

	/*nombreAlumno():string {
		return "Sergio Hidalgo"
	}*/
}

const alumnoMatriculado = new alumno("sergio", "Hidalgo")
console.log(alumnoMatriculado.nombreAlumno())