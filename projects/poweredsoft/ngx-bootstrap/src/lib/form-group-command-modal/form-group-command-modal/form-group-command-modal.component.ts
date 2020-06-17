import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IDataSource } from '@poweredsoft/data';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ps-form-group-command-modal',
  templateUrl: './form-group-command-modal.component.html',
  styleUrls: ['./form-group-command-modal.component.scss']
})
export class FormGroupCommandModalComponent implements OnInit {


  modelForm: FormGroup;
  title: string;
  template: TemplateRef<any>;
  command: string;
  dataSource: IDataSource<any>;
  refreshOnSuccess: boolean;
  loading: boolean;
  commandText: string;
  cancelText: string;
  errorMessage: string;
  commandModel:any; 
  
  private _notifyMessage: Subscription;
  private _validationError: Subscription;

  constructor(public modalRef: BsModalRef) { }

  ngOnDestroy(): void {
    this._notifyMessage.unsubscribe();
    this._validationError.unsubscribe();
  }

  ngOnInit(): void {
    this.errorMessage = null;
    // this._notifyMessage = this.dataSource.notifyMessage$.subscribe(message => {
      
    // });
   
    this._validationError = this.dataSource.validationError$.subscribe(validatorErrors => {      
      let validationSummary = '';
      Object.getOwnPropertyNames(validatorErrors.errors).forEach(property => {
        const errors = validatorErrors.errors[property].join('\n');
        validationSummary += errors + '\n';
      });
      this.errorMessage = validationSummary.trim();
    });
  }

  attemptSave() {
    // this.errorMessage = null;
    // if (!this.modelForm.valid)
    // {
    //   this.errorMessage = 'Form is not valid, please enter all required fields';      
    //   return;
    // }

    const finalModel = this.modelForm.value;  
    if(this.commandModel.id)
    {
      finalModel.id = this.commandModel.id;
    }
    this.loading = true;
    this.dataSource.executeCommandByName(this.command, finalModel)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(success => {
        if (this.refreshOnSuccess)
          this.dataSource.refresh();

        this.modalRef.hide();
      }, fail => {
        // you do not want to close on failure.. so just ignore..
      });
  }
}
