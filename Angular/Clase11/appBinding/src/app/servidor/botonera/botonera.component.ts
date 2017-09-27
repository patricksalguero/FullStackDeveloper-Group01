import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  @Output("dedicadoCreado") crearDedicado = new EventEmitter<{tipo:string, uso:string, descripcion:string}>()

  uso:string = ""
  descripcion:string = ""

  constructor() { }

  onAgregarServidorDedicado(){
	  const servidorData = {
		  tipo: "dedicado",
		  uso: this.uso,
		  descripcion: this.descripcion
	  }

	  this.crearDedicado.emit(servidorData)
  }

  ngOnInit() {
  }

}
