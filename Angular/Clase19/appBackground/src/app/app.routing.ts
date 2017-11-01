import { NgModule } from "@angular/core";

import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { HomeComponent } from "./nucleo/home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuardadoGuard } from "./auth/guardado.guard";
import { CorreosComponent } from "./mails/correos/correos.component";


const rutas: Routes = [
    { path: "", component: HomeComponent},
    { path: "correos", loadChildren: "./mails/mails.module#MailsModule", canLoad: [AuthGuard]}
    //{ path: "**", component: CorreosComponent}
    //{ path: "**", redirectTo: "correos"}
  ]

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard, GuardadoGuard]
})
export class AppRouting {}