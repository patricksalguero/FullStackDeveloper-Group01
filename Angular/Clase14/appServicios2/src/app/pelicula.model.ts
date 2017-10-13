interface IComentario {
    autor: string
    texto: string
}

export class Pelicula {
    constructor(public titulo: string, public sinopsis: string, public director: string, public anno: number, public comentarios: IComentario[]){
    }
}
