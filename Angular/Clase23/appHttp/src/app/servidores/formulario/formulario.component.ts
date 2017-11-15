import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IServidor } from '../iservidor.interface';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() servidor: IServidor
  @Output() agregado = new EventEmitter<IServidor>()

  constructor() { }

  ngOnInit() {
  }

  grabar(){
    this.agregado.emit(this.servidor)
  }

}
