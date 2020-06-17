import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalService } from '../../confirm-modal.service';
import { Observer } from 'rxjs';


@Component({
  selector: 'psbx-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {


  yesText: string;
  noText: string;
  message: string;
  yesClass: string;
  noClass: string;
  observer: Observer<boolean>;

  constructor(private modelRef: BsModalRef, private actionService: ConfirmModalService) {

  }

  ngOnInit(): void {
    
  }

  get yesButtonClass() {
    return `btn btn-sm btn-${this.yesClass}`
  }

  get noButtonClass() {
    return `btn btn-sm btn-${this.noClass}`
  }

  confirm(): void {
    this.modelRef.hide();
    this.observer.next(true);
    this.observer.complete();
  }
 
  decline(): void {
    this.modelRef.hide();
    this.observer.next(false);
    this.observer.complete();
  }

}
