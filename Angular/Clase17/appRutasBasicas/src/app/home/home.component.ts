import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: string
  contrasena: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loguearse(){
    const autenticado = this.authService.login(this.usuario, this.contrasena)

    if(autenticado) this.router.navigate(['correos'])
  }
}
