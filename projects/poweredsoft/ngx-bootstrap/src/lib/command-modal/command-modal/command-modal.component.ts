import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize} from 'rxjs/operators';
import { Subscription } from 'rxjs';

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

  private _notifyMessage: Subscription;
  private _validationError: Subscription;

  constructor(public modalRef: BsModalRef) { }

  ngOnDestroy(): void {
    this._notifyMessage.unsubscribe();
    this._validationError.unsubscribe();
  }

  ngOnInit(): void {
    this._notifyMessage = this.dataSource.notifyMessage$.subscribe(message => {
      
    });

    this._validationError = this.dataSource.validationError$.subscribe(validatorErrors => {
      console.log(validatorErrors);
    });
  }

  attemptSave() {
    this.loading = true;
    this.dataSource.executeCommandByName(this.command, this.commandModel)
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
