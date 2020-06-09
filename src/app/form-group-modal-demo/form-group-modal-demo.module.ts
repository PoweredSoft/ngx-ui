import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupModalDemoComponent } from './form-group-modal-demo/form-group-modal-demo.component';
import { FormGroupModalDemoRoutingModule } from './form-group-modal-demo-routing.module'


@NgModule({
  declarations: [FormGroupModalDemoComponent],
  imports: [
    CommonModule,
    FormGroupModalDemoRoutingModule
  ]
})
export class FormGroupModalDemoModule { }
