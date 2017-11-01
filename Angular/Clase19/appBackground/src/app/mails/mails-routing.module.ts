import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorreosComponent } from './correos/correos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EditarComponent } from './editar/editar.component';
import { AuthGuard } from '../auth/auth.guard';
import { GuardadoGuard } from '../auth/guardado.guard';

const routes: Routes = [
  { path: "", component: CorreosComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
    { path: "detalle", component: DetalleComponent},
    { path: "editar", component: EditarComponent, canDeactivate: [GuardadoGuard]}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailsRoutingModule { }
