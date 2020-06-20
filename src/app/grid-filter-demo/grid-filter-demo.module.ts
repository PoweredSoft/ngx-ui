import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridFilterDemoRoutingModule } from './grid-filter-demo-routing.module';
import { GridFilterDemoComponent } from './grid-filter-demo/grid-filter-demo.component';
import { GridFilterModule, psbxPaginationModule, CommandModalModule, ConfirmModalModule, SpinnerModule } from '@poweredsoft/ngx-bootstrap';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridFilterDemoComponent],
  imports: [
    CommonModule,
    GridFilterDemoRoutingModule,
    GridFilterModule,    
    psbxPaginationModule,
    DataGridModule,
    CommandModalModule,
    ConfirmModalModule,
    FormsModule,
    SpinnerModule
  ]
})
export class GridFilterDemoModule { }
