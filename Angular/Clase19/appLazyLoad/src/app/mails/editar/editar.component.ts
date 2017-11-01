import { Component, OnInit } from '@angular/core';
import { canDeactivateComponent } from '../../auth/guardado.guard';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, canDeactivateComponent {
  remitente: string 
  remitenteOriginal: string

  canDeactivateComponent(): boolean {
    if(this.remitente===this.remitenteOriginal) {
      return true
    } else {
      if(confirm("Hay cambios sin salvar. ¿Estás seguro de querer salir?")){
        return true
      } else {
        return false
      }
    }
  }

  constructor() { }

  ngOnInit() {
    this.remitente = "Sergio"
    this.remitenteOriginal = "Sergio"
  }

  

}
