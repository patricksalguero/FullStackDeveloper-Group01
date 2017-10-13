interface IComentario {
    autor: string
    texto: string
}

export class Pelicula {
    titulo: string
    sinopsis: string
    director: string
    anno: number
    comentarios: IComentario[]

    constructor(titulo: string, sinopsis: string, director: string, anno: number, comentarios: IComentario[]){
        this.titulo = titulo
        this.sinopsis = sinopsis
        this.director = director
        this.anno = anno
        this.comentarios = comentarios
    }
}
