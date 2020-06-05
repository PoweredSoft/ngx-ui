import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridColHeader]'
})
export class DataGridColHeaderDirective {

  constructor(public template: TemplateRef<any>) { }

}
