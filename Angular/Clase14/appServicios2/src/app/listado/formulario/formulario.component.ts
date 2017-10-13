import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../pelicula.model'
import { PeliculasService } from '../../peliculas.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  agregarPela(titulo: string, sinopsis: string, director: string, anno: number){
    const pelicula: Pelicula = new Pelicula(titulo, sinopsis, director, anno, [])

    this.peliculasService.peliculas.push(pelicula)

  }

}
