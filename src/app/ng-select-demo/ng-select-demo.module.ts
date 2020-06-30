import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectDemoComponent } from './ng-select-demo/ng-select-demo.component';
import { NgSelectDemoRoutingModule } from './ng-select-demo-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PsSelectorsModule } from '@poweredsoft/ngx-cdk-ui';



@NgModule({
  declarations: [NgSelectDemoComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgSelectDemoRoutingModule,
    PsSelectorsModule  //our ng select module
  ]
})
export class NgSelectDemoModule { }
