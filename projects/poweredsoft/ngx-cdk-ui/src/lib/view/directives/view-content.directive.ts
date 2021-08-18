import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psViewContent]'
})
export class ViewContentDirective {

  constructor(public template: TemplateRef<any>) { }

}
