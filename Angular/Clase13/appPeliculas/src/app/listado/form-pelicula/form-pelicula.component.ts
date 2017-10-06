import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../compartido/pelicula'

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css']
})
export class FormPeliculaComponent implements OnInit {
  @Output("peliculaAgregada") peliculaAgregada = new EventEmitter<Pelicula>()

  constructor() { }

  agregar(titulo:string, sinopsis:string){
    const pela:Pelicula = new Pelicula(titulo, sinopsis,"", [])
    this.peliculaAgregada.emit(pela)
  }

  ngOnInit() {
  }

}
