import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    selector: "[app-directiva]"
})
export class AppDirectiva implements OnInit {
    constructor(public elementRef: ElementRef){
    }

    ngOnInit(){
        const ref = this.elementRef.nativeElement
        ref.style.backgroundColor = "red"
        ref.style.fontFamily = "Verdana"
        ref.style.fontSize = "40px"
        ref.style.color = "white"
        ref.style.padding = "15px"
    }
}