import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridDemoRoutingModule } from './data-grid-demo-routing.module';
import { DataGridDemoHomeComponent } from './data-grid-demo-home/data-grid-demo-home.component';


@NgModule({
  declarations: [ DataGridDemoHomeComponent],
  imports: [
    CommonModule,
    DataGridDemoRoutingModule
  ]
})
export class DataGridDemoModule { }
