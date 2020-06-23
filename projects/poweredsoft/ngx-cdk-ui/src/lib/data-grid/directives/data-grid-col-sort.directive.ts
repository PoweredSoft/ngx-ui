import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridColSort]'
})
export class DataGridColSortDirective {

  constructor(public template: TemplateRef<any>) { }

}
