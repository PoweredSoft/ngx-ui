import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommandModalDirective } from './directives/command-modal.directive';
import { CommandModalComponent } from './command-modal/command-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [CommandModalDirective, CommandModalComponent],
  exports: [CommandModalDirective]
})
export class CommandModalModule { }
