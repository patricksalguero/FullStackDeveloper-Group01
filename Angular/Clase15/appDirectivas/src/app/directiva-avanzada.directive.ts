import { Directive, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectivaAvanzada]'
})
export class DirectivaAvanzadaDirective implements OnInit {
  @Input() appDirectivaAvanzada: string
  @Input() colorPorDefecto: string
  @Input("colorHover") hover: string

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){}

  @HostListener("mouseenter") mouseEntrando(){
    this.elementRef.nativeElement.style.backgroundColor = this.hover
  }

  @HostListener("mouseleave") mouseSaliendo(){
    this.elementRef.nativeElement.style.backgroundColor = this.appDirectivaAvanzada
  }
}
