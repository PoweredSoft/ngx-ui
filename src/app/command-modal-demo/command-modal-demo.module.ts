import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModalDemoComponent } from './command-modal-demo/command-modal-demo.component';
import { CommandModalDemoRoutingModule } from './command-modal-demo-routing.module';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';

import {FormsModule} from '@angular/forms';
import { CommandModalModule, psbxPaginationModule, ConfirmModalModule } from '@poweredsoft/ngx-bootstrap';
@NgModule({
  declarations: [CommandModalDemoComponent],
  imports: [
    CommonModule,
    CommandModalDemoRoutingModule,
    DataGridModule,
    CommandModalModule,
    FormsModule,
    psbxPaginationModule,
    ConfirmModalModule
  ]
})
export class CommandModalDemoModule { }
