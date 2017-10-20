import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  estado: boolean = false

  ngOnInit(){
    
  }

  enviando(){
    const promesa = new Promise((resolve, reject) => {
      this.estado = true

      setTimeout(()=>{
        resolve()
      },4000)
    })

    promesa
      .then(() => {
        this.estado = false
      })    
  }
}
