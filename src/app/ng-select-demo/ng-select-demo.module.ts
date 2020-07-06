import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectDemoComponent } from './ng-select-demo/ng-select-demo.component';
import { NgSelectDemoRoutingModule } from './ng-select-demo-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PsNgSelectorsModule } from '@poweredsoft/ng-select';




@NgModule({
  declarations: [NgSelectDemoComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectDemoRoutingModule,
    PsNgSelectorsModule
  ]
})
export class NgSelectDemoModule { }
