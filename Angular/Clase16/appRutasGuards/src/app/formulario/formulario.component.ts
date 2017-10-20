import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ServidorService } from '../servidor.service'
import { Servidor } from '../servidor'
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private servicio: ServidorService, private router: Router) { }

  ngOnInit() {
  }

  grabar(id: number, nombre: string, area: string, descripcion: string, estado: string, responsable: string){

    this.servicio.agregar(new Servidor(id, nombre, area, descripcion, estado, responsable))

    this.router.navigate(["/"])

    console.log(this.servicio.servidores)
  }

}
