import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceSortingComponent } from './ds-sorting/data-source-sorting.component';



@NgModule({
  declarations: [DataSourceSortingComponent],
  imports: [
    CommonModule
  ],
  exports:[DataSourceSortingComponent]
})
export class DataSourceSortingModule { }
