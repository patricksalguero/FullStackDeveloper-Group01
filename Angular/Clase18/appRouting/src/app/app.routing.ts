import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./home/home.component";
import { CorreosComponent } from "./correos/correos.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { EditarComponent } from "./editar/editar.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuardadoGuard } from "./auth/guardado.guard";


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
        HomeComponent,
        CorreosComponent,
        DetalleComponent,
        EditarComponent
    ],
    imports: [
        RouterModule.forRoot(rutas),
        FormsModule,
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard, GuardadoGuard]
})
export class AppRouting {}