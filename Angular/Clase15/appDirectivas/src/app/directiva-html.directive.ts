import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivaHtml]'
})
export class DirectivaHtmlDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseenter") entrando(){
    const elemento = this.elementRef.nativeElement
    elemento.innerHTML = "<div class='circulo'>C</div>"
  }



}
