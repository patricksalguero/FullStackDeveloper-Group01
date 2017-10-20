import { Component, OnInit, Input } from '@angular/core';
import { Servidor } from '../../servidor'

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  @Input() servidor: Servidor

  constructor() { }

  ngOnInit() {
  }

}
