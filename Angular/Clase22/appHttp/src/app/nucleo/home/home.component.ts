import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AutenticacionService } from '../../compartido/autenticacion.service';
import { IUsuario } from '../../compartido/iusuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string
  password: string
  estaAutenticado: boolean = false

  constructor(private auth: AutenticacionService) { }

  ngOnInit() {
    this.auth.cambioEstado
      .subscribe(
      (data: boolean) => {
        this.estaAutenticado = data
      }
      )
  }

  loguear() {
    const datos: IUsuario = { email: this.email, password: this.password }

    this.auth.login(datos)
  }

}
