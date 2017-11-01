import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component'
import { AppRouting } from "../app.routing";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent,
        CabeceraComponent
    ],
    imports: [
        AppRouting,
        FormsModule,
        CommonModule
    ],
    exports: [
        AppRouting,
        CabeceraComponent
    ]
})
export class NucleoModule {}