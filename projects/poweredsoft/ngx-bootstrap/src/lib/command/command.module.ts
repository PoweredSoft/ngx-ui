import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandDirective } from './directives/command.directive';
import { ConfirmModalModule } from '../confirm-modal/confirm-modal.module';



@NgModule({
  declarations: [CommandDirective],
  imports: [
    CommonModule,
    ConfirmModalModule
  ],
  exports:[CommandDirective]
})
export class CommandModule { }
