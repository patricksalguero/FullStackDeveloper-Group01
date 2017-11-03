import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: number
  servidor: IServidor

  constructor(private rutaActiva: ActivatedRoute, private servidorService: ServidoresService) { }

  ngOnInit() {
    this.id = +this.rutaActiva.snapshot.params["id"]

    this.obtenerDetalle()

    this.rutaActiva.params
      .subscribe(
        (parametros: Params) => {
          this.id = parametros["id"]
          this.obtenerDetalle()
        }
      )
  }

  obtenerDetalle() {
    this.servidorService.detalle(this.id)
    .subscribe(
      (registro:IServidor) => {
        this.servidor = registro
      }
    )
  }

}
