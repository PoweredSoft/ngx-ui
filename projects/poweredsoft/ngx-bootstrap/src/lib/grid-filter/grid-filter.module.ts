import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { FormsModule } from '@angular/forms';
import { NumberFilterComponent } from './number-filter/number-filter.component';
import { DatetimeFilterComponent } from './datetime-filter/datetime-filter.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [TextFilterComponent, NumberFilterComponent,DatetimeFilterComponent],
  imports: [
    CommonModule,
    FormsModule,    
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [TextFilterComponent, NumberFilterComponent,DatetimeFilterComponent]
})
export class GridFilterModule { }
