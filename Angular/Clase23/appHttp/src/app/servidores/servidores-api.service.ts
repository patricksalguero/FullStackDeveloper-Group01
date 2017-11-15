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

    // const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` })

    return this.http.get<IServidor[]>("http://localhost:1337/servidores", {
      //headers: headers,
      observe: "body", responseType: "json"
    })
  }

  insertar(servidor: IServidor): Observable<IServidor> {
    const token = this.auth.obtenerToken()

    //const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` })
    
    return this.http.post<IServidor>("http://localhost:1337/servidores", servidor, {
      observe: "body", responseType: "json" //, headers
    })
  }

  actualizar(servidor: IServidor): Observable<IServidor> {
    return this.http.put<IServidor>(`http://localhost:1337/servidores/${servidor.idServidor}`, servidor, {
      observe: "body", responseType: "json"
    })
  }

  detalle(idServidor: number): Observable<IServidor[]> {
    return this.http.get<IServidor[]>(`http://localhost:1337/servidores/${idServidor}`, {
      observe: "body", responseType: "json"
    })
  }

}
