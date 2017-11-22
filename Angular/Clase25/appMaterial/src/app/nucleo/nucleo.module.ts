import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { AppRouting } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    FormsModule,
    MaterialModule
  ],
  declarations: [CabeceraComponent, HomeComponent],
  exports: [
    CabeceraComponent,
    AppRouting
  ]
})
export class NucleoModule { }
