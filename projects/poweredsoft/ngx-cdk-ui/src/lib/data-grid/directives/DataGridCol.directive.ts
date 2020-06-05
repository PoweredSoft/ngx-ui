import { Directive, Input, ContentChild } from '@angular/core';
import { DataGridColHeaderDirective } from './DataGridColHeader.directive';
import { DataGridCellDirective } from './DataGridCell.directive';

@Directive({
  selector: '[psDataGridCol]'
})
export class DataGridColDirective {

  @Input('psDataGridCol') columnName:string;
  @ContentChild(DataGridColHeaderDirective) headerTemplate:DataGridColHeaderDirective;
  @ContentChild(DataGridCellDirective) cellTemplate:DataGridCellDirective;  

  constructor() { }

}
