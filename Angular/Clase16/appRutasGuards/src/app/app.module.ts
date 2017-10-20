import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ServidorComponent } from './listado/servidor/servidor.component';
import { ServidorService } from './servidor.service'

const rutas: Routes = [
  {path: "", component: ListadoComponent},
  {path: "agregar", component: FormularioComponent},
  {path: "detalle/:id", component: DetalleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    DetalleComponent,
    ServidorComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [ServidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
