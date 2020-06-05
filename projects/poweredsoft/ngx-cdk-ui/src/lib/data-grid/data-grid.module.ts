import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataGridColDirective } from './directives/DataGridCol.directive';
import { DataGridColHeaderDirective } from './directives/DataGridColHeader.directive';
import { DataGridCellDirective } from './directives/DataGridCell.directive';



@NgModule({
  declarations: [DataGridComponent,DataGridColDirective,DataGridColHeaderDirective,DataGridCellDirective],
  imports: [
    CommonModule
  ],
  exports: [DataGridComponent,DataGridColDirective,DataGridColHeaderDirective,DataGridCellDirective]
})
export class DataGridModule { }
