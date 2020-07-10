import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceTextFilterComponent } from './text-filter/data-source-text-filter.component';
import { FormsModule } from '@angular/forms';
import { DataSourceNumberFilterComponent } from './number-filter/data-source-number-filter.component';
import { DataSourceDatetimeFilterComponent } from './datetime-filter/data-source-datetime-filter.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [DataSourceTextFilterComponent, DataSourceNumberFilterComponent,DataSourceDatetimeFilterComponent],
  imports: [
    CommonModule,
    FormsModule,    
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [DataSourceTextFilterComponent, DataSourceNumberFilterComponent,DataSourceDatetimeFilterComponent]
})
export class DataSourceFilterModule { }