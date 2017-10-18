import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDirectiva } from './app.directive';
import { DirectivaAvanzadaDirective } from './directiva-avanzada.directive';
import { DirectivaHtmlDirective } from './directiva-html.directive';
import { SelectDepartamentosDirective } from './select-departamentos.directive';
import { EsperaDirective } from './espera.directive';
import { FechaDirective } from './fecha.directive'

@NgModule({
  declarations: [
    AppComponent, AppDirectiva, DirectivaAvanzadaDirective, DirectivaHtmlDirective, SelectDepartamentosDirective, EsperaDirective, FechaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
