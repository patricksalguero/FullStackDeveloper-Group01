import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './iusuario.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticacionApiService {

  constructor(private http: HttpClient) { }

  login(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>("http://localhost:1337/login", {email: usuario.email, password: usuario.password}, {
      observe: "body", responseType: "json"
    })

    /* return registro */
  }

  logout(): Observable<{estado: string}> {
    return this.http.get<{estado: string}>("http://localhost:1337/logout", {
      observe: "body", responseType: "json"
    })
  }

}
