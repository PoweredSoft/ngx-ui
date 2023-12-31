import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModalDemoComponent } from './command-modal-demo/command-modal-demo.component';
import { CommandModalDemoRoutingModule } from './command-modal-demo-routing.module';
import { DataGridModule, DsValidationErrorModule } from '@poweredsoft/ngx-cdk-ui';

import {FormsModule} from '@angular/forms';
import { CommandModalModule, PaginationModule, ConfirmModalModule,CommandModule } from '@poweredsoft/ngx-bootstrap';
@NgModule({
  declarations: [CommandModalDemoComponent],
  imports: [
    CommonModule,
    CommandModalDemoRoutingModule,
    DsValidationErrorModule,
    DataGridModule,
    CommandModalModule,
    FormsModule,
    PaginationModule,
    ConfirmModalModule,
    CommandModule
  ]
})
export class CommandModalDemoModule { }
