import {Component} from "@angular/core"

@Component({
	selector: "app-curso",
	template: "<p>Este es el html del component Curso</p>",
	styles:[
		`
			p {
				color: red;
				font-family:Verdana;
				font-size:40px
			}
		`
	]
})
export class CursoComponent{
	titulo:string = "FullStack"
}