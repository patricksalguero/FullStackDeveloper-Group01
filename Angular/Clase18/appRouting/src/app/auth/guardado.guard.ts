import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface canDeactivateComponent {
  canDeactivateComponent: () => boolean
}

@Injectable()
export class GuardadoGuard implements CanDeactivate<canDeactivateComponent> {

  canDeactivate(componente: canDeactivateComponent){
    return componente.canDeactivateComponent()
  }

}
