import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[psViewNoRecords]'
})
export class ViewNoRecordsDirective {

  constructor(public template: TemplateRef<any>) { }

}
