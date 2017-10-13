import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../pelicula.model'
import { PeliculasService } from '../peliculas.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  peliculas: Pelicula[]

  constructor(private peliculasService: PeliculasService) { 
  }

  ngOnInit() {
    this.peliculas = this.peliculasService.peliculas
  }

}
