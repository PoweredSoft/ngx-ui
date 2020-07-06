import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psNgSelectLabel]'
})
export class SelectLabelTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
