import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psNgSelectOption]'
})
export class SelectOptionTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
