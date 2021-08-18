import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDsCommandValidation]'
})
export class DsCommandValidationDirective {

  constructor(public template: TemplateRef<any>) { }

}
