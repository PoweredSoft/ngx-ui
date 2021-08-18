import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDemoRoutingModule } from './view-demo-routing.module';
import { ViewDemoPageComponent } from './view-demo-page/view-demo-page.component';
import { ViewModule } from '@poweredsoft/ngx-cdk-ui';


@NgModule({
  declarations: [ViewDemoPageComponent],
  imports: [
    CommonModule,
    ViewDemoRoutingModule,
    CommonModule,
    ViewModule
  ]
})
export class ViewDemoModule { }
