import { Injectable } from '@angular/core';
import { Servidor } from './servidor'

@Injectable()
export class ServidorService {
  servidores: Array<Servidor> = []

  constructor() { }

  agregar(servidor: Servidor){
    this.servidores.push(servidor)
  }

  eliminar(id: number){

  }

  obtener(id: number): Servidor {
    const obj = this.servidores.filter(servidor => {
      return servidor.id = id
    })

    return obj[0]
  }

}
