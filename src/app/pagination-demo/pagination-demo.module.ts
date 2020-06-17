import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationDemoRoutingModule } from './pagination-demo-routing.module';
import { PaginationDemoComponent } from './pagination-demo/pagination/pagination-demo.component';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { psbxPaginationModule, CommandModalModule, ConfirmModalModule,SpinnerModule } from '@poweredsoft/ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [PaginationDemoComponent],
  imports: [
    CommonModule,
    PaginationDemoRoutingModule,
    psbxPaginationModule,
    DataGridModule,
    CommandModalModule,
    ConfirmModalModule,
    FormsModule,
    SpinnerModule
       
  ]
})
export class PaginationDemoModule { }
