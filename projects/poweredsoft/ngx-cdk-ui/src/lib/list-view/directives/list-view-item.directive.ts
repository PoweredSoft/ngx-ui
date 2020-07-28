import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psListViewItem]'
})
export class ListViewItemDirective {

  constructor(public template: TemplateRef<any>) { }

}
