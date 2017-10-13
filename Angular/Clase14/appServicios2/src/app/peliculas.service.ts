import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula.model'

@Injectable()
export class PeliculasService {
  peliculas: Pelicula[] = [
    new Pelicula("El Gladiador","Un general que desafió al emperador","Desconozco", 1996, []),
    new Pelicula("El Perfume", "Historia de un asesino", "Desconozco", 1995, [])
  ]

  peliculaSeleccionada: Pelicula

  constructor() { }

}
