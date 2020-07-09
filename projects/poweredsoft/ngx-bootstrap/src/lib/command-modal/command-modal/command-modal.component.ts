import { Component, OnInit, TemplateRef, OnDestroy, EventEmitter } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'psbx-command-modal',
  templateUrl: './command-modal.component.html',
  styleUrls: ['./command-modal.component.scss']
})
export class CommandModalComponent implements OnInit, OnDestroy {

  title: string;
  template: TemplateRef<any>;
  command: string;
  commandModel: any;
  dataSource: IDataSource<any>;
  refreshOnSuccess: boolean;
  loading: boolean;
  commandText: string;
  cancelText: string;
  form:NgForm;
  validationMessage:string ;
  btnClass:string;
  successEmitter: EventEmitter<any>; 

  private _notifyMessage: Subscription;
  private _validationError: Subscription;

  constructor(public modalRef: BsModalRef) { }

  ngOnDestroy(): void {
    this._notifyMessage.unsubscribe();
    this._validationError.unsubscribe();
  }

  ngOnInit(): void {
    this._notifyMessage = this.dataSource.notifyMessage$.subscribe(message => {
      if (message.type != 'info')
        this.validationMessage = message.message;
    });

    this._validationError = this.dataSource.validationError$.subscribe(validatorErrors => {      
      let validationSummary = '';
      Object.getOwnPropertyNames(validatorErrors.errors).forEach(property => {
        const errors = validatorErrors.errors[property].join('\n');
        validationSummary += errors + '\n';
      });
      this.validationMessage = validationSummary.trim();
    });
  }

  onSubmit(){
    

    this.loading = true;
    this.validationMessage = null;

    this.dataSource.executeCommandByName(this.command, this.commandModel)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(commandResult => {
        if (this.refreshOnSuccess)
          this.dataSource.refresh();

        this.modalRef.hide();
        this.successEmitter.emit(commandResult);
      }, fail => {
        // you do not want to close on failure.. so just ignore..
      });
  }

  attemptSave() {
    
  }

}
