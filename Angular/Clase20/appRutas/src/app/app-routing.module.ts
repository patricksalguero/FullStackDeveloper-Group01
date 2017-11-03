import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { ListadoComponent } from "./listado/listado.component";
import { HomeComponent } from "./home/home.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { EditarComponent } from "./editar/editar.component";

const rutas: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "servidores", component: ListadoComponent, children: [
        {path: "detalle/:id", component: DetalleComponent},
        {path: "editar/:id", component: EditarComponent}
    ]}
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