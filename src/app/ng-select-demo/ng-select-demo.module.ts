import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectDemoComponent } from './ng-select-demo/ng-select-demo.component';
import { NgSelectDemoRoutingModule } from './ng-select-demo-routing.module';



@NgModule({
  declarations: [NgSelectDemoComponent],
  imports: [
    CommonModule,
    NgSelectDemoRoutingModule
  ]
})
export class NgSelectDemoModule { }
