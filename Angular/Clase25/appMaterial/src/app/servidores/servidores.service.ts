import { Injectable } from '@angular/core';
import { ServidoresApiService } from './servidores-api.service';
import { Observable } from 'rxjs/Observable';
import { IServidor } from './iservidor.interface';

@Injectable()
export class ServidoresService {

  constructor(private servicio: ServidoresApiService) { }

  listado(): Observable<IServidor[]> {
    return this.servicio.listado()
  }

  insertar(servidor: IServidor): Observable<IServidor>{
    return this.servicio.insertar(servidor)
  }

  actualizar(servidor: IServidor): Observable<IServidor> {
    return this.servicio.actualizar(servidor)
  }

  detalle(idServidor: number): Observable<IServidor[]> {
    return this.servicio.detalle(idServidor)
  }

  eliminar(idServidor: number): Observable<IServidor> {
    return this.servicio.eliminar(idServidor)
  }
}
