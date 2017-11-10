import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ServidoresRoutingModule } from './servidores-routing.module';
import { ServidoresApiService } from './servidores-api.service';
import { ServidoresService } from './servidores.service';

@NgModule({
  imports: [
    CommonModule,
    ServidoresRoutingModule
  ],
  declarations: [ListadoComponent, EditarComponent, NuevoComponent],
  providers: [
    ServidoresService, ServidoresApiService
  ]
})
export class ServidoresModule { }
