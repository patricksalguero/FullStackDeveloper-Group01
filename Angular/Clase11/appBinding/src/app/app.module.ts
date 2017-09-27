import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServidorComponent } from './servidor/servidor.component';
import { BotoneraComponent } from './servidor/botonera/botonera.component';

@NgModule({
  declarations: [
    AppComponent,
    ServidorComponent,
    BotoneraComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
