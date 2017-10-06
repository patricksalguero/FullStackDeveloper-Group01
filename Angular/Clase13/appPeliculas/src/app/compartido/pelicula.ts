export class Pelicula {
    titulo:string
    sinopsis:string
    director:string
    comentarios:Array<string>

    constructor(titulo:string, sinopsis:string, director:string, comentarios:string[]){
        this.titulo = titulo
        this.sinopsis = sinopsis
        this.director = director
        this.comentarios = comentarios
    }
}
