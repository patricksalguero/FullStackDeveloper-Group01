import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class AutenticacionGuard implements CanActivate, CanLoad {
  constructor(private auth: AutenticacionService) { }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.auth.estaAutenticado()
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.estaAutenticado()
  }
}
