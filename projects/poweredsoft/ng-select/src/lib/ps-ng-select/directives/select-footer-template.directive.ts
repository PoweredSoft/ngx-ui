import { Directive, TemplateRef } from '@angular/core';


@Directive({
  selector: '[psNgSelectFooter]'
})
export class SelectFooterTemplateDirective {
  constructor(public template: TemplateRef<any>) { }

}
