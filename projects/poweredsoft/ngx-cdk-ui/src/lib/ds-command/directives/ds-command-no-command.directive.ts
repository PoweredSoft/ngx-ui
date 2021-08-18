import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDsCommandNoCommand]'
})
export class DsCommandNoCommandDirective {

  constructor(public template: TemplateRef<any>) { }

}
