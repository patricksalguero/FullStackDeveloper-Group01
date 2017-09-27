import { Component, OnInit, Input } from '@angular/core';
import { Servidor } from '../../compartido/servidores.class'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //@Input("listadoServidores") servidores:{tipo:string, uso:string, descripcion:string}[]
  @Input("listadoServidores") servidores:Servidor[]

  constructor() { }

  ngOnInit() {
  }

}
