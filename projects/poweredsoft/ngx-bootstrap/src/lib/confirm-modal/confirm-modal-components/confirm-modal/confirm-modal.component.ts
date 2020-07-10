import { Component, OnInit, TemplateRef, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  constructor(private modelRef: BsModalRef) {

  }

  ngOnInit(): void {
    
  }

  get yesButtonClass() {
    return `btn btn-${this.yesClass}`
  }

  get noButtonClass() {
    return `btn btn-${this.noClass}`
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
