import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../compartido/pelicula'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() pelas:Pelicula[]
  constructor() { }

  ngOnInit() {
  }

  agregarPela(pelicula:Pelicula){
    this.pelas.push(pelicula)
  }

}
