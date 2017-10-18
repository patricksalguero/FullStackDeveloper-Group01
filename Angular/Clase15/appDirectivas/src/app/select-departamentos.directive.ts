import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSelectDepartamentos]'
})
export class SelectDepartamentosDirective implements OnInit {
  @Input() lista: Array<string> 

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.lista.forEach((item, indice) => {
      const option = document.createElement("option")
      option.innerHTML = item
      option.value = `${indice}`
      this.elementRef.nativeElement.appendChild(option)
    })

  }

}
