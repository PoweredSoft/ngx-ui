import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridCell]'
})
export class DataGridCellDirective {

  constructor(public template: TemplateRef<any>) { }

}
