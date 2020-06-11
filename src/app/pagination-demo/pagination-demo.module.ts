import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationDemoRoutingModule } from './pagination-demo-routing.module';
import { PaginationDemoComponent } from './pagination-demo/pagination/pagination-demo.component';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { FormGroupCommandModalModule,psbxPaginationModule, CommandModalModule } from '@poweredsoft/ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaginationDemoComponent],
  imports: [
    CommonModule,
    PaginationDemoRoutingModule,
    psbxPaginationModule,
    DataGridModule,
    CommandModalModule,
    FormsModule    
  ]
})
export class PaginationDemoModule { }
