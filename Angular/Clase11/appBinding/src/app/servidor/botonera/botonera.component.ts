import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Servidor } from '../../compartido/servidores.class'
@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
/*
  @Output("dedicadoCreado") crearDedicado = new EventEmitter<{tipo:string, uso:string, descripcion:string}>()
  @Output("compartidoCreado") crearCompartido = new EventEmitter<{tipo:string, uso:string, descripcion:string}>()
  @Output("vpsCreado") crearVPS = new EventEmitter<{tipo:string, uso:string, descripcion:string}>()
*/
@Output("dedicadoCreado") crearDedicado = new EventEmitter<Servidor>()
@Output("compartidoCreado") crearCompartido = new EventEmitter<Servidor>()
@Output("vpsCreado") crearVPS = new EventEmitter<Servidor>()

  uso:string = ""
  descripcion:string = ""

  constructor() { }

  onAgregarServidorDedicado(){
/*	  const servidorData = {
		  tipo: "dedicado",
		  uso: this.uso,
		  descripcion: this.descripcion
	  }
*/
	  const servidorData = new Servidor("dedicado", this.uso, this.descripcion)

	  this.crearDedicado.emit(servidorData)
  }

  onAgregarServidorCompartido(){
	/*const servidorData = {
		tipo: "compartido",
		uso: this.uso,
		descripcion: this.descripcion
	}*/

	const servidorData = new Servidor("compartido", this.uso, this.descripcion)

	this.crearCompartido.emit(servidorData)
  }

  onAgregarServidorVPS(){
	/*const servidorData = {
		tipo: "vps",
		uso: this.uso,
		descripcion: this.descripcion
	}*/

	const servidorData = new Servidor("vps", this.uso, this.descripcion)

	this.crearVPS.emit(servidorData)
}

  ngOnInit() {
  }

}
