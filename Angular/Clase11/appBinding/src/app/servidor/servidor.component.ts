import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {
  @Input("tipo") tipoServidor:string
  @Input() uso:string
  @Input() descripcion:string

  constructor() { }

  ngOnInit() {
  }

}
