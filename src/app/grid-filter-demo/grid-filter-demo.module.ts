import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridFilterDemoRoutingModule } from './grid-filter-demo-routing.module';
import { GridFilterDemoComponent } from './grid-filter-demo/grid-filter-demo.component';


@NgModule({
  declarations: [GridFilterDemoComponent],
  imports: [
    CommonModule,
    GridFilterDemoRoutingModule
  ]
})
export class GridFilterDemoModule { }
