import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridFooter]'
})
export class DataGridFooterDirective {

  constructor(public template: TemplateRef<any>) { }

}
