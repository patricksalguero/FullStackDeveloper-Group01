import { CanActivate, CanActivateChild, CanLoad } from '@angular/router'
import { Injectable } from '@angular/core'
import { AuthService, IUsuario } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    canLoad(): boolean {
        return this.authService.usuarioAutenticado()
    }

    constructor(private authService: AuthService){}

    canActivate(): boolean {
        return this.authService.usuarioAutenticado()
    }

    canActivateChild(): boolean {
        const usuario: IUsuario = this.authService.datosUsuario()

        if(usuario && usuario.rol === "ADMIN"){
            return true
        }

        return false
    }
    
}