import { Injectable } from '@angular/core';
import { IServidor } from './interfaces';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ServidoresService {

  servidores: IServidor[] = [
    { id: 1, nombre: "Web", descripcion: "Usado para el proyecto educativo de matemáticas", tipo: "Dedicado", fecha: new Date(), activo: true },
    { id: 2, nombre: "Base de datos", descripcion: "Este servidor almacena la información de todos los proyectos", tipo: "VPN", fecha: new Date(), activo: true },
    { id: 3, nombre: "Firewall", descripcion: "Seguridad", tipo: "Dedicado", fecha: new Date(), activo: false },
    { id: 4, nombre: "Correo", descripcion: "Almacena los correos corporativos", tipo: "Compartido", fecha: new Date(), activo: true }
  ]

  constructor() { }

  listar(): Observable<IServidor[]> {
    const observador: Observable<IServidor[]> = Observable.create(
      (observer: Observer<IServidor[]>) => {
        setTimeout(() => {
          observer.next(this.servidores)
        }, 3000)
      }
    )

    return observador
  }

  detalle(id: number): Observable<IServidor> {
    const observador: Observable<IServidor> = Observable.create(
      (observer: Observer<IServidor>) => {
        setTimeout(()=>{
          const registro: IServidor = this.servidores.find(servidor => servidor.id === id)

          observer.next(registro)
        }, 1500)
      }
    )

    return observador
  }

  editar() { }

}
