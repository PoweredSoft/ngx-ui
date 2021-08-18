import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psViewLoading]'
})
export class ViewLoadingDirective {

  constructor(public template: TemplateRef<any>) { }

}
