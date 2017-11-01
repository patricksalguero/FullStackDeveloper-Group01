import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./nucleo/home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuardadoGuard } from "./auth/guardado.guard";
import { CorreosComponent } from "./mails/correos/correos.component";


const rutas: Routes = [
    { path: "", component: HomeComponent}
    //{ path: "**", component: CorreosComponent}
    //{ path: "**", redirectTo: "correos"}
  ]

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard, GuardadoGuard]
})
export class AppRouting {}