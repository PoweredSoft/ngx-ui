import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewDemoRoutingModule } from './list-view-demo-routing.module';
import { ListViewDemoHomeComponent } from './list-view-demo-home/list-view-demo-home.component';
import { ListViewModule } from '@poweredsoft/ngx-cdk-ui';



@NgModule({
  declarations: [ListViewDemoHomeComponent],
  imports: [
    CommonModule,
    ListViewDemoRoutingModule,
    ListViewModule
  ]
})
export class ListViewDemoModule { }
