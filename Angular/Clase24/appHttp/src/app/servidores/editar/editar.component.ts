import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  idServidor: number
  servidor: IServidor

  constructor(private servidoresService: ServidoresService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idServidor = +this.rutaActiva.snapshot.params.id

    this.servidoresService.detalle(this.idServidor)
      .subscribe(
        (data: IServidor[]) => {
          this.servidor = data[0]
          console.log(data)
        },
        (error: Error) => console.log(error.message)
      )
  }

  grabar(servidor: IServidor) {
    this.servidoresService.actualizar(servidor)
      .subscribe(
        (data: IServidor) => {
          this.router.navigate(["servidores"])
        },
        (error: Error) => console.log(error.message)
      )
  }

  eliminar(idServidor: number) {
    this.servidoresService.eliminar(idServidor)
      .subscribe(
        (data: IServidor) => this.router.navigate(["servidores"]),
        (error: Error) => console.log(error.message)
      )
  }

}
