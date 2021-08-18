import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDsCommandContent]'
})
export class DsCommandContentDirective {

  constructor(public template: TemplateRef<any>) { }

}
