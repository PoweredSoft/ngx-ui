import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridSortingComponent } from './grid-sorting/grid-sorting.component';



@NgModule({
  declarations: [GridSortingComponent],
  imports: [
    CommonModule
  ],
  exports:[GridSortingComponent]
})
export class GridSortingModule { }
