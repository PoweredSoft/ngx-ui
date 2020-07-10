import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupModalDemoComponent } from './form-group-modal-demo/form-group-modal-demo.component';
import { FormGroupModalDemoRoutingModule } from './form-group-modal-demo-routing.module'
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { FormGroupCommandModalModule, PaginationModule, CommandModule } from '@poweredsoft/ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmModalModule } from 'projects/poweredsoft/ngx-bootstrap/src/public-api';



@NgModule({
  declarations: [FormGroupModalDemoComponent],
  imports: [
    CommonModule,
    FormGroupModalDemoRoutingModule,
    DataGridModule,
    FormGroupCommandModalModule,
    ReactiveFormsModule,
    PaginationModule,
    ConfirmModalModule,
    CommandModule
    
  ]
})
export class FormGroupModalDemoModule { }
