import { Component, OnInit, Output, EventEmitter, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { Servidor } from '../../compartido/servidores.class'
@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
  encapsulation: ViewEncapsulation.None
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

  @ViewChild("uso") usoElement:ElementRef
  @ViewChild("descripcion") descripcionElement:ElementRef

  constructor() { }

  onAgregarServidorDedicado(){
/*	  const servidorData = {
		  tipo: "dedicado",
		  uso: this.uso,
		  descripcion: this.descripcion
	  }
*/
	  const servidorData = new Servidor("dedicado", this.usoElement.nativeElement.value, this.descripcionElement.nativeElement.value)

	  this.crearDedicado.emit(servidorData)
	  this.usoElement.nativeElement.value = ""
	  this.descripcionElement.nativeElement.value = ""
  }

  onAgregarServidorCompartido(){
	/*const servidorData = {
		tipo: "compartido",
		uso: this.uso,
		descripcion: this.descripcion
	}*/

	const servidorData = new Servidor("compartido", this.usoElement.nativeElement.value, this.descripcionElement.nativeElement.value)

	this.crearCompartido.emit(servidorData)
	this.usoElement.nativeElement.value = ""
	this.descripcionElement.nativeElement.va}

  onAgregarServidorVPS(){
	/*const servidorData = {
		tipo: "vps",
		uso: this.uso,
		descripcion: this.descripcion
	}*/

	const servidorData = new Servidor("vps", this.usoElement.nativeElement.value, this.descripcionElement.nativeElement.value)

	this.crearVPS.emit(servidorData)
	this.usoElement.nativeElement.value = ""
	this.descripcionElement.nativeElement.value = ""
}

  ngOnInit() {
  }

}
