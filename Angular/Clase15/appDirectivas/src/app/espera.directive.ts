import { Directive, ElementRef, HostListener, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEspera]'
})
export class EsperaDirective implements OnInit {
  @Input() procesando: boolean = false
  @HostBinding("class.espera") cambio: boolean
  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.cambio = this.procesando
  }

  AfterContentChecked(){
    if(this.procesando) {
      this.elementRef.nativeElement.classList.add("espera")
    } else {
      this.elementRef.nativeElement.classList.remove("espera")
    }
    
  }

  @HostListener("click") click(){
    /*const estilo = this.elementRef.nativeElement.style
    const elemento = this.elementRef.nativeElement

    elemento.classList.add("espera")*/

    /*estilo.backgroundImage="url(../assets/cargador.gif)"
    estilo.backgroundRepeat = "no-repeat"
    //estilo.transform = "scaleX(1.4)"
    estilo.width = "160px"
    estilo.backgroundSize = "contain"*/
    //elemento.disabled = true
  }

}
