import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';

import { ServidorComponent } from "./servidor.component";
import { ServidoresComponent } from './servidores/servidores.component';
import { DirectivasComponent } from './directivas/directivas.component'

@NgModule({
  declarations: [
	AppComponent,
	ServidorComponent,
	ServidoresComponent,
	DirectivasComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [DirectivasComponent]
})
export class AppModule { }
