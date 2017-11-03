import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  numeros: Observable<number>

  miObservable: Observable<string>

  ngOnInit() {
    /*this.numeros = Observable.interval(1000)

    this.numeros.subscribe(
      (data: number) => console.log(data)
    )*/

    this.miObservable = Observable.create(
      (observador: Observer<string>) => {
        setTimeout(() => {
          observador.next("Etapa 1")
        }, 3000)

        setTimeout(() => {
          observador.next("Etapa 2")
        }, 5000)

        setTimeout(() => {
          observador.complete()
        }, 7000)

        setTimeout(() => {
          observador.next("Etapa 3")
        }, 8000)

        setTimeout(() => {
          observador.error("Error")
        }, 10000)

        setTimeout(() => {
          observador.next("Etapa 4")
        }, 12000)
      }
    )

    this.miObservable.subscribe(
      (data: string) => {
        console.log(data)
      },
      (error: string) => {
        console.log(error)
      },
      () => {
        console.log("Se terminó")
      }
    )

  }
}
