import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridFilterDemoRoutingModule } from './grid-filter-demo-routing.module';
import { GridFilterDemoComponent } from './grid-filter-demo/grid-filter-demo.component';
import { DataSourceFilterModule, PaginationModule, CommandModalModule, ConfirmModalModule, SpinnerModule, DataSourceSortingModule, CommandModule } from '@poweredsoft/ngx-bootstrap';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridFilterDemoComponent],
  imports: [
    CommonModule,
    GridFilterDemoRoutingModule,
    DataSourceFilterModule,    
    PaginationModule,
    DataGridModule,
    CommandModalModule,
    ConfirmModalModule,
    FormsModule,
    SpinnerModule,
    DataSourceSortingModule,
    CommandModule
  ]
})
export class GridFilterDemoModule { }
