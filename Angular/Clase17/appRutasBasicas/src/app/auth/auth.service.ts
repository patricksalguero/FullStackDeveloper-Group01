import { Injectable, EventEmitter } from '@angular/core';

export interface IUsuario {
  usuario:string
  contrasena: string,
  rol: string
}

@Injectable()
export class AuthService {
  private estaAutenticado: boolean = false

  private usuarios:IUsuario[] = [
    {usuario: 'shidalgo', contrasena: '123', rol: 'ADMIN'},
    {usuario: 'anonimo', contrasena: '4567', rol: 'READER'}
  ]

  private usuarioLogueado: IUsuario

  cambioEstado = new EventEmitter<IUsuario>()

  constructor() { }

  login(usuario: string, contrasena: string): boolean {
    this.usuarioLogueado = this.usuarios.find( user => user.usuario === usuario && user.contrasena === contrasena)

    if(this.usuarioLogueado) {
      this.estaAutenticado = true  
    } else {
      this.estaAutenticado = false
    }

    return this.estaAutenticado

  }

  logout(){
    this.estaAutenticado = false
    this.usuarioLogueado = undefined

    this.cambioEstado.emit(this.usuarioLogueado)
  }

  usuarioAutenticado(): boolean {
    return this.estaAutenticado
  }

  datosUsuario(): IUsuario {
    return this.usuarioLogueado
  }


}
