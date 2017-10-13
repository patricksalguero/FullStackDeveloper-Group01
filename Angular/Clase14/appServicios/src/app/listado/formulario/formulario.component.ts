import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../pelicula.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output("peliculaAgregada") peliculaAgregada = new EventEmitter<Pelicula>()
  constructor() { }

  ngOnInit() {
  }

  agregarPela(titulo: string, sinopsis: string, director: string, anno: number){
    const pelicula: Pelicula = new Pelicula(titulo, sinopsis, director, anno, [])

    this.peliculaAgregada.emit(pelicula)
  }

}
