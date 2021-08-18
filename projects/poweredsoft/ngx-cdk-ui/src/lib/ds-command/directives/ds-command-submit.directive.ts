import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[psDsCommandSubmit]'
})
export class DsCommandSubmitDirective {

  
  constructor(public element: ElementRef) { }

}
