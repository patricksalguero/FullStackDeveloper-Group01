import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FormPeliculaComponent } from './listado/form-pelicula/form-pelicula.component';
import { PeliculaComponent } from './listado/pelicula/pelicula.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormPeliculaComponent,
    PeliculaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
