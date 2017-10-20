import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../servidor.service'
import { Servidor } from '../servidor'
import { Router } from '@angular/router'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  lista: Array<Servidor>

  constructor(private servicio: ServidorService, private router: Router) { 
    this.lista = this.servicio.servidores
  }

  ngOnInit() {
  }

  irADetalle(id:number){
    this.router.navigate(["detalle", id])
  }

}
