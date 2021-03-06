import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../compartido/autenticacion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private auth: AutenticacionService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout()
  }

}
