import { Directive, Input, ContentChild } from '@angular/core';
import { DataGridColHeaderDirective } from './data-grid-col-header.directive';
import { DataGridCellDirective } from './data-grid-cell.directive';

@Directive({
  selector: '[psDataGridCol]'
})
export class DataGridColDirective {

  @Input('psDataGridCol') columnName:string;
  @ContentChild(DataGridColHeaderDirective) headerTemplate:DataGridColHeaderDirective;
  @ContentChild(DataGridCellDirective) cellTemplate:DataGridCellDirective;  

  constructor() { }

}
