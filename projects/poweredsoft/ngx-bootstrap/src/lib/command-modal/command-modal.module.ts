import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommandModalDirective } from './directives/command-modal.directive';
import { CommandModalComponent } from './command-modal/command-modal.component';
import { InputValidatorDirective } from './directives/input-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [CommandModalDirective, CommandModalComponent, InputValidatorDirective],
  exports: [CommandModalDirective]
})
export class CommandModalModule { }
