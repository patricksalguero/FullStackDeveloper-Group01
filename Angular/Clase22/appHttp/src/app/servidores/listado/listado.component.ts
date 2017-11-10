import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  servidores: IServidor[]

  constructor(private servicio: ServidoresService) { }

  ngOnInit() {
    this.servicio.listado()
      .subscribe(
        (servidores: IServidor[]) => {this.servidores = servidores},
        (error: Error) => {console.log(error.message)}
      )
  }

}
