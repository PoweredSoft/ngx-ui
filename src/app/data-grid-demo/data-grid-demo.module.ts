import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridDemoRoutingModule } from './data-grid-demo-routing.module';
import { DataGridDemoHomeComponent } from './data-grid-demo-home/data-grid-demo-home.component';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';


@NgModule({
  declarations: [ DataGridDemoHomeComponent],
  imports: [
    CommonModule,
    DataGridDemoRoutingModule,
    DataGridModule    
  ]
})
export class DataGridDemoModule { }
