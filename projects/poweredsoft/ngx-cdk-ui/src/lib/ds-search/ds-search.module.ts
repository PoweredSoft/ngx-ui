import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsSearchComponent } from './ds-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DsSearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DsSearchComponent]
})
export class DsSearchModule { }
