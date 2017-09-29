export class Pelicula {
	titulo:string
	sinopsis:string
	imagen:string
	comentarios:string[]

	constructor(titulo:string, sinopsis:string, imagen:string, comentarios:string[]){
		this.titulo = titulo
		this.sinopsis = sinopsis
		this.imagen = imagen
		this.comentarios = comentarios
	}
}
