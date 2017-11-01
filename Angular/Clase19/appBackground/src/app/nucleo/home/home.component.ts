import { Component, OnInit } from '@angular/core';
import { AuthService, IUsuario } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: string
  contrasena: string

  logueado: IUsuario

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.logueado = this.authService.datosUsuario()
    this.authService.cambioEstado
      .subscribe((usuario: IUsuario) => {
        this.logueado = usuario
      })
  }

  loguearse(){
    const autenticado = this.authService.login(this.usuario, this.contrasena)

    if(autenticado) this.router.navigate(['correos'])
  }
}
