import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../pelicula.model'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() peliculas: Pelicula[]
  @Output("nuevaPelicula") nuevaPelicula = new EventEmitter<Pelicula>()
  @Output("seleccion") seleccion = new EventEmitter<Pelicula>()

  constructor() { }

  onPeliculaAgregada(pelicula: Pelicula){
     this.nuevaPelicula.emit(pelicula)
     //this.peliculas.push(pelicula)
  }

  seleccionarPelicula(pelicula: Pelicula){
    this.seleccion.emit(pelicula)
  }

  ngOnInit() {
  }

}
