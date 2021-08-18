import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsCommandDemoRoutingModule } from './ds-command-demo-routing.module';
import { DsCommandDemoPageComponent } from './ds-command-demo-page/ds-command-demo-page.component';
import { DsCommandModule, DsValidationErrorModule, ViewModule } from '@poweredsoft/ngx-cdk-ui';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DsCommandDemoPageComponent],
  imports: [
    CommonModule,
    DsCommandDemoRoutingModule,
    DsCommandModule,
    ViewModule,
    FormsModule,
    DsValidationErrorModule
  ]
})
export class DsCommandDemoModule { }
