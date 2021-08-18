import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDsCommandError]'
})
export class DsCommandErrorDirective {

  constructor(public template: TemplateRef<any>) { }

}
