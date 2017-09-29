import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServidorComponent } from './servidor/servidor.component';
import { BotoneraComponent } from './servidor/botonera/botonera.component';
import { ListadoComponent } from './servidor/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ServidorComponent,
    BotoneraComponent,
    ListadoComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
