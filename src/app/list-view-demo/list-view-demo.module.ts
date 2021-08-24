import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewDemoRoutingModule } from './list-view-demo-routing.module';
import { ListViewDemoHomeComponent } from './list-view-demo-home/list-view-demo-home.component';
import { ListViewModule } from '@poweredsoft/ngx-cdk-ui';
import { FormGroupCommandModalModule, PaginationModule } from '@poweredsoft/ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DsSearchModule } from 'projects/poweredsoft/ngx-cdk-ui/src/lib/ds-search/ds-search.module';
import { DsPagerModule } from 'projects/poweredsoft/ngx-cdk-ui/src/public-api';



@NgModule({
  declarations: [ListViewDemoHomeComponent],
  imports: [
    CommonModule,
    ListViewDemoRoutingModule,
    ListViewModule,
    PaginationModule,
    ReactiveFormsModule,
    FormGroupCommandModalModule,
    DsSearchModule,
    DsPagerModule
  ]
})
export class ListViewDemoModule { }
