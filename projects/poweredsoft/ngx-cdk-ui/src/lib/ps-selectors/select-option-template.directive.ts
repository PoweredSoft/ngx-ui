import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psSelectOptionTemplate]'
})
export class SelectOptionTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
