import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psDataGridLoader]'
})
export class DataGridLoaderDirective {

  constructor(public template: TemplateRef<any>) { }

}
