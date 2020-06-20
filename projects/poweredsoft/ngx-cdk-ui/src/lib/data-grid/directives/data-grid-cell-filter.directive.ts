import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridCellFilter]'
})
export class DataGridCellFilterDirective {

  constructor(public template: TemplateRef<any>) { }

}
