import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridFilterDemoRoutingModule } from './grid-filter-demo-routing.module';
import { GridFilterDemoComponent } from './grid-filter-demo/grid-filter-demo.component';
import { DataSourceFilterModule, psbxPaginationModule, CommandModalModule, ConfirmModalModule, SpinnerModule, DataSourceSortingModule } from '@poweredsoft/ngx-bootstrap';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridFilterDemoComponent],
  imports: [
    CommonModule,
    GridFilterDemoRoutingModule,
    DataSourceFilterModule,    
    psbxPaginationModule,
    DataGridModule,
    CommandModalModule,
    ConfirmModalModule,
    FormsModule,
    SpinnerModule,
    DataSourceSortingModule
  ]
})
export class GridFilterDemoModule { }
