import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLadda]'
})
export class LaddaDirective {
  @Input() set procesando(valor: boolean) {
    const elemento = this.elementRef.nativeElement
    elemento.disabled = valor

    if(valor){
      elemento.style.width = "200px"
      elemento.style.backgroundImage = "url(assets/cargador.gif)"
      elemento.style.backgroundSize = "contain"
      elemento.style.backgroundRepeat = "no-repeat"
    } else {
      elemento.style.width = "100px"
      elemento.style.backgroundImage = ""
    }
  } 
  constructor(private elementRef: ElementRef) { }

}
