import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psListViewSeperator]'
})
export class ListViewSeperatorDirective {

  constructor(public template: TemplateRef<any>) { }

}
