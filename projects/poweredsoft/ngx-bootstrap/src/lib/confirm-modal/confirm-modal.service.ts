import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal-components/confirm-modal/confirm-modal.component';
import { Observable, Observer } from 'rxjs';

export interface IConfirmModalOptions
{
  yesClass?: string;
  noClass?: string;
  message: string;
  yesText?: string;
  noText?: string;
}

@Injectable()
export class ConfirmModalService {

  constructor(private modalService: BsModalService) { }

  confirm(options: IConfirmModalOptions) : Observable<boolean> {
    return Observable.create((o: Observer<boolean>) => {


      const initialState = {
        message: options.message,
        yesText: options.yesText || 'yes',
        noText: options.noText || 'no',
        yesClass: options.yesClass || 'primary',
        noClass: options.noClass || 'light',
        observer: o
      };

      const modal = this.modalService.show(ConfirmModalComponent, {
        initialState: initialState,
        animated: true,
        keyboard: false
      });
    });
  }
}
