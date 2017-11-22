import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ServidoresRoutingModule } from './servidores-routing.module';
import { ServidoresApiService } from './servidores-api.service';
import { ServidoresService } from './servidores.service';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServidoresRoutingModule
  ],
  declarations: [ListadoComponent, EditarComponent, NuevoComponent, FormularioComponent],
  providers: [
    ServidoresService, ServidoresApiService
  ]
})
export class ServidoresModule { }
