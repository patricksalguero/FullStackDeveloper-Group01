import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PeliculaComponent } from './listado/pelicula/pelicula.component';
import { ComentariosComponent } from './detalle/comentarios/comentarios.component';
import { ComentarioComponent } from './detalle/comentarios/comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    PeliculaComponent,
    ComentariosComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
