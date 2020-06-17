import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterComponent } from './text-filter/text-filter.component';



@NgModule({
  declarations: [TextFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [TextFilterComponent]
})
export class GridFilterModule { }
