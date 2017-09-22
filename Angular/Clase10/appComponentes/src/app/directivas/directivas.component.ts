import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  listaServidores:string[] = []

  nombreServidor:string 

  constructor() { }

  agregarServidor(){
	  this.listaServidores.push(this.nombreServidor)
  }

  existencia(){
	  return this.listaServidores.length == 0 ? "No hay servidores" : "Sí hay servidores"
  }

  obtenerColor(){
	  return this.listaServidores.length == 1 ? "yellow" : "skyblue" 
  }

  obtenerFamilia(){
	return this.listaServidores.length > 3 ? "Tahoma" : "Arial" 
  }

  ngOnInit() {
  }

}
