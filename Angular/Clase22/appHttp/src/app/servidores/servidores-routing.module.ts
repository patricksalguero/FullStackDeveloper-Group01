import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarComponent } from "./editar/editar.component";
import { NuevoComponent } from "./nuevo/nuevo.component";
import { ListadoComponent } from "./listado/listado.component";
import { AutenticacionGuard } from "../compartido/autenticacion.guard";

const rutas: Routes = [
    {path: "", canActivate:[AutenticacionGuard], children:[
        {path: "", component: ListadoComponent, pathMatch: "full"},
        {path: "editar", component: EditarComponent},
        {path: "nuevo", component: NuevoComponent}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(rutas)
    ]

})
export class ServidoresRoutingModule {}