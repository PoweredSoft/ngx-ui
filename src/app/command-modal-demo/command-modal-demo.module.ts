import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandModalDemoComponent } from './command-modal-demo/command-modal-demo.component';
import { CommandModalDemoRoutingModule } from './command-modal-demo-routing.module';



@NgModule({
  declarations: [CommandModalDemoComponent],
  imports: [
    CommonModule,
    CommandModalDemoRoutingModule
  ]
})
export class CommandModalDemoModule { }
