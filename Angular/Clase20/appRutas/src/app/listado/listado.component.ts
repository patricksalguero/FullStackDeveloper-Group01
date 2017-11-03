import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { IServidor } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //servidores: IServidor[]
  servidores: Observable<IServidor[]>
  textoABuscar: string

  constructor(private servidoresService: ServidoresService, private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.servidores = this.servidoresService.listar()
    /*this.servidoresService
      .listar()
      .subscribe(
        (registros: IServidor[]) => {
          this.servidores = registros
        }
      )*/
  }

  mostrarDetalle(id: number) {
    this.router.navigate(['detalle', id], {relativeTo: this.rutaActiva})
  }

}
