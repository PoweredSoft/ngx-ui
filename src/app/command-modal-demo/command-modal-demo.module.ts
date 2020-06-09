import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModalDemoComponent } from './command-modal-demo/command-modal-demo.component';
import { CommandModalDemoRoutingModule } from './command-modal-demo-routing.module';
import { DataGridModule } from '@poweredsoft/ngx-cdk-ui';
import { CommandModalModule } from 'projects/poweredsoft/ngx-bootstrap/src/public-api';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [CommandModalDemoComponent],
  imports: [
    CommonModule,
    CommandModalDemoRoutingModule,
    DataGridModule,
    CommandModalModule,
    FormsModule
  ]
})
export class CommandModalDemoModule { }
