import { Directive, Input, ContentChild, ContentChildren } from '@angular/core';
import { DataGridColHeaderDirective } from './data-grid-col-header.directive';
import { DataGridCellDirective } from './data-grid-cell.directive';
import { DataGridCellFilterDirective } from './data-grid-cell-filter.directive';
import { DataGridColSortDirective } from './data-grid-col-sort.directive';


@Directive({
  selector: '[psDataGridCol]'
})
export class DataGridColDirective {

  @Input('psDataGridCol') columnName:string;
  @ContentChild(DataGridColHeaderDirective) headerTemplate:DataGridColHeaderDirective;
  @ContentChild(DataGridCellDirective) cellTemplate:DataGridCellDirective;  
  @ContentChild(DataGridCellFilterDirective) filterTemplate: DataGridCellFilterDirective;
  @ContentChild(DataGridColSortDirective) sortTemplate: DataGridColSortDirective;

  constructor() { }

}
