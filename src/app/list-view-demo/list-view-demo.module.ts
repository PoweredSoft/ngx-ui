import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewDemoRoutingModule } from './list-view-demo-routing.module';
import { ListViewDemoHomeComponent } from './list-view-demo-home/list-view-demo-home.component';


@NgModule({
  declarations: [ListViewDemoHomeComponent],
  imports: [
    CommonModule,
    ListViewDemoRoutingModule
  ]
})
export class ListViewDemoModule { }
