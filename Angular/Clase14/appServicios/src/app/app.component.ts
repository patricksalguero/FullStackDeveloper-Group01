import { Component } from '@angular/core';
import { Pelicula } from './pelicula.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peliculas: Pelicula[] = [
    new Pelicula("El Gladiador","Un general que desafió al emperador","Desconozco", 1996, []),
    new Pelicula("El Perfume", "Historia de un asesino", "Desconozco", 1995, [])
  ]

  peliculaSeleccionada: Pelicula

  onNuevaPelicula(pelicula: Pelicula){
    this.peliculas.push(pelicula)
  }
}
