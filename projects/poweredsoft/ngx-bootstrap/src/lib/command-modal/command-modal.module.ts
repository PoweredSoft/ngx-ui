import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommandModalDirective } from './directives/command-modal.directive';
import { CommandModalComponent } from './command-modal/command-modal.component';
import { FormsModule } from '@angular/forms';
import {CommandModalService} from './command-modal.service';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [CommandModalService],
  declarations: [CommandModalDirective, CommandModalComponent],
  exports: [CommandModalDirective]
})
export class CommandModalModule { }
