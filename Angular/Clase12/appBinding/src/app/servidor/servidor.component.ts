import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServidorComponent implements OnInit {
  @Input() indice:number

  constructor() { }

  ngOnInit() {
  }

}
