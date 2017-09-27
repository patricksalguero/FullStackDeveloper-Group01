import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // servidores:{tipo:string, uso:string, descripcion:string}[]
  servidores:Array<{tipo:string, uso:string, descripcion:string}> = [{tipo:"dedicado", uso: "web", descripcion:"Webs de Molitalia"}]

  uso:string = ""
  descripcion:string = ""

  constructor(){

  }

  onDedicadoCreado(data:{tipo:string, uso:string, descripcion:string}){
	  this.servidores.push(data)
	  console.log("Método onDedicadoCreado")
  }

  /*
  onAgregarServidorDedicado(){
	this.servidores.push({
		tipo: "dedicado",
		uso: this.uso,
		descripcion: this.descripcion
	})
	console.log(this.servidores)
  }

  onAgregarServidorCompartido(){
	this.servidores.push({
		tipo: "compartido",
		uso: this.uso,
		descripcion: this.descripcion
	})
	console.log(this.servidores)
  }

  onAgregarServidorVPS(){
	this.servidores.push({
		tipo: "vps",
		uso: this.uso,
		descripcion: this.descripcion
	})
	console.log(this.servidores)
  }*/

}
