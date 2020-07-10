import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataGridColDirective } from './directives/data-grid-col.directive';
import { DataGridColHeaderDirective } from './directives/data-grid-col-header.directive';
import { DataGridCellDirective } from './directives/data-grid-cell.directive';
import { DataGridFooterDirective } from './directives/data-grid-footer.directive';
import { DataGridHeaderDirective } from './directives/data-grid-header.directive';
import { DataGridLoaderDirective } from './directives/data-grid-loader.directive';
import { DataGridCellFilterDirective } from './directives/data-grid-cell-filter.directive';
import { DataGridColSortDirective } from './directives/data-grid-col-sort.directive';





@NgModule({
  declarations: [
    DataGridComponent,DataGridColDirective,DataGridColHeaderDirective,
    DataGridCellDirective, DataGridFooterDirective, DataGridHeaderDirective, 
    DataGridLoaderDirective, DataGridCellFilterDirective, DataGridColSortDirective,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataGridComponent,DataGridColDirective,DataGridColHeaderDirective,
    DataGridCellDirective,DataGridFooterDirective, DataGridHeaderDirective,
    DataGridLoaderDirective,DataGridCellFilterDirective,DataGridColSortDirective]
})
export class DataGridModule { }
