import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFecha]'
})
export class FechaDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("focus") cambiarDate() {
    this.elementRef.nativeElement.type = "date"
  }

  @HostListener("blur") cambiarText() {
    this.elementRef.nativeElement.type = "text"
  }

}
