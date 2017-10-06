import { Component } from '@angular/core';
import { Pelicula } from './compartido/pelicula'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peliculas:Pelicula[]

  constructor(){
    this.peliculas = [
      new Pelicula("El Gladiador", "Historia de un general que se volvió gladiador","No me acuerdo", []),
      new Pelicula("El Perfume", "Historia de un asesino que mata mujeres para robarles su esencia", "No me acuerdo", [])
    ]
  }
}
