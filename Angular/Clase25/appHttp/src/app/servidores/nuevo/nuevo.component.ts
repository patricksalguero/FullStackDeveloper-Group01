import { Component, OnInit } from '@angular/core';
import { IServidor } from '../iservidor.interface';
import { ServidoresService } from '../servidores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private servidoresService: ServidoresService, private router: Router) { }

  ngOnInit() {
  }

  agregar(servidor: IServidor) {
    this.servidoresService.insertar(servidor)
      .subscribe(
        (data: IServidor) => {
          this.router.navigate(["servidores"])
        },
        (error: Error) => console.log(error.message)
      )
  }

}
