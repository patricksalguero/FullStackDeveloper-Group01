import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso.component'

@NgModule({
  declarations: [
	AppComponent,
	CursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CursoComponent]
})
export class AppModule { }
