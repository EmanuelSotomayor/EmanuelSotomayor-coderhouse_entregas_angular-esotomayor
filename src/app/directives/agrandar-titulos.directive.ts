import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAgrandarTitulos]'
})
export class AgrandarTitulosDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(elementRef.nativeElement, 'font-size', '20px');
  }

}
