import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmModalComponent} from './confirm-modal-components/confirm-modal/confirm-modal.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ConfirmModalService} from './confirm-modal.service';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  exports: [],
  providers: [ConfirmModalService]
})
export class ConfirmModalModule { }
