import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psListViewHeader]'
})
export class ListViewHeaderDirective {

  constructor(public template: TemplateRef<any>) { }

}
