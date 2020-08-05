import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psListViewFooter]'
})
export class ListViewFooterDirective {

  constructor(public template: TemplateRef<any>) { }

}
