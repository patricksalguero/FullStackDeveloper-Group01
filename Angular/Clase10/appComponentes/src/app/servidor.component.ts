import { Component } from "@angular/core"

@Component({
	selector: "app-servidor", // busca <app-servidor>
	//selector: ".app-servidor", // busca <div class="app-servidor">
	//selector: "[app-servidor]", // busca <article app-servidor>
	templateUrl: "./servidor.component.html",
	styleUrls: ["./servidor.component.css"]
	// template: "<h1>Mi Propio Componente</h1>",
/*	styles:[
		`
			h1 {
				font-family: Tahoma;
				font-size: 20px;
				color:blue
			}
		`
	]*/
})
export class ServidorComponent {

}