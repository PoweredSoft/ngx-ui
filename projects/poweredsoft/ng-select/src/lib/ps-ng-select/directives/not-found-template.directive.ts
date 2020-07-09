import { Directive, TemplateRef } from '@angular/core';


@Directive({
  selector: '[psNgNotFoundTemplate]'
})
export class NotFoundTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
