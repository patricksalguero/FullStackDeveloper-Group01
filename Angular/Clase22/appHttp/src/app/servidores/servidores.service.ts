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

}
