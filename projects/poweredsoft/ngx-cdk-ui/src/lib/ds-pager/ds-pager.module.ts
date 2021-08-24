import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPagerComponent } from './ds-pager.component';

@NgModule({
  declarations: [DsPagerComponent],
  imports: [
    CommonModule
  ],
  exports: [DsPagerComponent]
})
export class DsPagerModule { }
