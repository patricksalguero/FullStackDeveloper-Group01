import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CorreosComponent } from './correos/correos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { RolGuard } from './auth/rol.guard';
import { GuardadoGuard } from './auth/guardado.guard';

const rutas: Routes = [
  { path: "", component: HomeComponent},
  { path: "correos", component: CorreosComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
    { path: "detalle", component: DetalleComponent},
    { path: "editar", component: EditarComponent, canDeactivate: [GuardadoGuard]}  
  ]},
  //{ path: "**", component: CorreosComponent}
  { path: "**", redirectTo: "correos"}
]


@NgModule({
  declarations: [
    AppComponent,
    CorreosComponent,
    DetalleComponent,
    EditarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [ AuthGuard, AuthService, RolGuard, GuardadoGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
