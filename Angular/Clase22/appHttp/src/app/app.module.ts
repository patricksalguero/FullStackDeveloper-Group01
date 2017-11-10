import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AutenticacionApiService } from './compartido/autenticacion-api.service';
import { AutenticacionService } from './compartido/autenticacion.service';
import { AutenticacionGuard } from './compartido/autenticacion.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NucleoModule
  ],
  providers: [AutenticacionService, AutenticacionApiService, AutenticacionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
