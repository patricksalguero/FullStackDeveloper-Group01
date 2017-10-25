import { Component, OnInit } from '@angular/core';
import { AuthService, IUsuario } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fecha: Date = new Date()
  logueado: IUsuario

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.logueado = this.authService.datosUsuario()

    this.authService.cambioEstado
      .subscribe( (usuario: IUsuario) => {
        this.logueado = usuario
      })

  }

  logout(){
    this.authService.logout()
    this.router.navigate([""])
  }
}
