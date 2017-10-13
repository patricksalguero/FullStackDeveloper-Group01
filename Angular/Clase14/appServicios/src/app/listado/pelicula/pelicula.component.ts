import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../pelicula.model'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input("pelicula") pela: Pelicula
  constructor() { }

  ngOnInit() {
  }

}
