import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./nucleo/home/home.component";

const rutas: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full"},
    { path: "servidores", loadChildren: "./servidores/servidores.module#ServidoresModule"}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {}