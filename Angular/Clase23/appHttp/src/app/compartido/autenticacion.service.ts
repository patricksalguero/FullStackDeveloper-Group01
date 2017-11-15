import { Injectable } from '@angular/core';
import { AutenticacionApiService } from './autenticacion-api.service';
import { IUsuario } from './iusuario.interface';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AutenticacionService {

  private usuario: IUsuario
  private autenticado: boolean = false
  private token: string

  cambioEstado = new Subject()

  constructor(private auth: AutenticacionApiService, private router: Router) { }

  estaAutenticado(): boolean {
    return this.autenticado
  }

  obtenerToken(): string {
    return this.token
  }

  login(usuario: IUsuario) {
    this.auth.login(usuario)
      .subscribe(
        (data: IUsuario) => {
          this.usuario = data
          this.token = data.token
          this.autenticado = true
          localStorage.setItem("token", data.token)
          this.cambioEstado.next(true)
        },
        (error: Error) => {}
      )
  }

  logout(){
    this.auth.logout()
      .subscribe(
        (data: any) => {
          this.usuario = undefined
          this.token = undefined
          this.autenticado = false
          localStorage.removeItem("token")
          this.router.navigate([""])
          this.cambioEstado.next(false)
        }
      )
  }

}
