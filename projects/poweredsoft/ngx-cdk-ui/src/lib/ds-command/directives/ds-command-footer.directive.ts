import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDsCommandFooter]'
})
export class DsCommandFooterDirective {

  constructor(public template: TemplateRef<any>) { }

}
