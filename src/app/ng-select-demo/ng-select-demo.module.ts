import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectDemoComponent } from './ng-select-demo/ng-select-demo.component';
import { NgSelectDemoRoutingModule } from './ng-select-demo-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PsNgSelectModule } from '@poweredsoft/ng-select';
import { CommandModule, CommandModalModule } from '@poweredsoft/ngx-bootstrap';




@NgModule({
  declarations: [NgSelectDemoComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectDemoRoutingModule,
    PsNgSelectModule,
    CommandModule,
    CommandModalModule
  ]
})
export class NgSelectDemoModule { }
