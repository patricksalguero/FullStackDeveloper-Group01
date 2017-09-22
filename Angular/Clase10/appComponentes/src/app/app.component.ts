import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  permitir:boolean = false
  texto:string = "Curso de FullStack"
  textoIngresado:string

  constructor(){
	  setTimeout(()=>{
		  this.permitir = true
	  },3000)
  }

  agregarServidor(){
	  alert("Servidor agregado")
  }

  caracterAgregado(evento){
	  this.textoIngresado = evento.target.value
	  console.log(evento.target.value)
  }
}
