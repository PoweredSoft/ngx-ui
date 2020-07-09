import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationDemoRoutingModule } from './pagination-demo-routing.module';
import { PaginationDemoComponent } from './pagination-demo/pagination/pagination-demo.component';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { PaginationModule, CommandModalModule, ConfirmModalModule,SpinnerModule, CommandModule } from '@poweredsoft/ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [PaginationDemoComponent],
  imports: [
    CommonModule,
    PaginationDemoRoutingModule,
    PaginationModule,
    DataGridModule,
    CommandModalModule,
    ConfirmModalModule,
    FormsModule,
    SpinnerModule,
    CommandModule
       
  ]
})
export class PaginationDemoModule { }
