import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, IUsuario } from './auth.service';

@Injectable()
export class RolGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    const usuario: IUsuario = this.authService.datosUsuario()

    if(usuario && usuario.rol === "ADMIN") {
      return true
    } else {
      this.router.navigate([""])
      return false
    }
  }
}
