import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  servidores: IServidor[]

  constructor(private servicio: ServidoresService, private router: Router) { }

  ngOnInit() {
    this.servicio.listado()
      .subscribe(
        (servidores: IServidor[]) => {this.servidores = servidores},
        (error: Error) => {console.log(error.message)}
      )
  }

  agregarServidor(){
    this.router.navigate(["servidores", "nuevo"])
  }

  seleccionar(idServidor: number) {
    this.router.navigate(["servidores", "editar", idServidor])
  }

}
