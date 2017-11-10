import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IServidor } from './iservidor.interface';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from '../compartido/autenticacion.service';

@Injectable()
export class ServidoresApiService {

  constructor(private http: HttpClient, private auth: AutenticacionService) { }

  listado(): Observable<IServidor[]> {
    const token = this.auth.obtenerToken()

    const headers: HttpHeaders = new HttpHeaders()
    headers.append("Authorization", `Bearer ${token}`)

    return this.http.get<IServidor[]>("http://localhost:1337/servidores", { headers: headers,
      observe: "body", responseType: "json"
    })
  }

}
