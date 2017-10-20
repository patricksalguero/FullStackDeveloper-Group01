import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Servidor } from '../servidor'
import { ServidorService} from '../servidor.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

    servidor: Servidor

  constructor(private rutaActiva: ActivatedRoute, private servicio: ServidorService) { }

  ngOnInit() {
    const id: number = this.rutaActiva.snapshot.params.id

    this.servidor = this.servicio.obtener(id)

    
  }

}
