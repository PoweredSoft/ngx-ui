import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridFilterDemoRoutingModule } from './grid-filter-demo-routing.module';
import { GridFilterDemoComponent } from './grid-filter-demo/grid-filter-demo.component';
import { GridFilterModule } from '@poweredsoft/ngx-bootstrap';

@NgModule({
  declarations: [GridFilterDemoComponent],
  imports: [
    CommonModule,
    GridFilterDemoRoutingModule,
    GridFilterModule,
  ]
})
export class GridFilterDemoModule { }
