import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { FormsModule } from '@angular/forms';
import { NumberFilterComponent } from './number-filter/number-filter.component';
import { DatetimeFilterComponent } from './datetime-filter/datetime-filter.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';






@NgModule({
  declarations: [TextFilterComponent, NumberFilterComponent,DatetimeFilterComponent],
  imports: [
    CommonModule,
    FormsModule,    
    BsDatepickerModule.forRoot(),
  ],
  exports: [TextFilterComponent, NumberFilterComponent,DatetimeFilterComponent]
})
export class GridFilterModule { }
