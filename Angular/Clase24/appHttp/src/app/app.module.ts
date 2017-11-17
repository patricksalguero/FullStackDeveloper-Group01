import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';


import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AutenticacionApiService } from './compartido/autenticacion-api.service';
import { AutenticacionService } from './compartido/autenticacion.service';
import { AutenticacionGuard } from './compartido/autenticacion.guard';
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NucleoModule,
    BrowserAnimationsModule
  ],
  providers: [
      AutenticacionService, 
      AutenticacionApiService, 
      AutenticacionGuard,
      {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
