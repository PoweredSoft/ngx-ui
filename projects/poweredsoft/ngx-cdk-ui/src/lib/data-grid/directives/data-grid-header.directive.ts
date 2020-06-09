import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridHeader]'
})
export class DataGridHeaderDirective {

  constructor(public template: TemplateRef<any>) { }

}
