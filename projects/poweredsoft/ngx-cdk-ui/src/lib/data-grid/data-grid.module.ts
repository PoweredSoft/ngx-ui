import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataGridColDirective } from './directives/data-grid-col.directive';
import { DataGridColHeaderDirective } from './directives/data-grid-col-header.directive';
import { DataGridCellDirective } from './directives/data-grid-cell.directive';
import { DataGridFooterDirective } from './directives/data-grid-footer.directive';
import { DataGridHeaderDirective } from './directives/data-grid-header.directive';





@NgModule({
  declarations: [DataGridComponent,DataGridColDirective,DataGridColHeaderDirective,DataGridCellDirective, DataGridFooterDirective, DataGridHeaderDirective,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [DataGridComponent,DataGridColDirective,DataGridColHeaderDirective,DataGridCellDirective,DataGridFooterDirective, DataGridHeaderDirective]
})
export class DataGridModule { }
