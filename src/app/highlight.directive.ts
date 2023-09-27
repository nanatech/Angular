import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) {
    //this.el.nativeElement.style.backgroundColor = "yellow";
   }

   @HostListener('window:keyup') OnMouseOver()
   {
      this.el.nativeElement.style.backgroundColor = "blue";
      console.log("Key Up");
   }

   @HostListener('window:keydown') OnDBClick()
   {
      this.el.nativeElement.style.backgroundColor = "yellow";
      console.log("Key Down");
   }

}
