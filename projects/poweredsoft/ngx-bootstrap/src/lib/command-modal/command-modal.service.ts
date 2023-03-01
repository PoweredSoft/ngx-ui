import {CommandModalComponent} from './command-modal/command-modal.component';
import {EventEmitter, Injectable, TemplateRef} from '@angular/core';
import {IDataSource} from '@poweredsoft/data';
import {BsModalService} from 'ngx-bootstrap/modal';

@Injectable()
export class CommandModalService {
  constructor(private modalService: BsModalService) {
  }

  spawn<TModel>(options: {
      dataSource: IDataSource<TModel>
      command: string,
      model: TModel,
      template: TemplateRef<any>,
      commandTitle?: string,
      refreshOnSuccess?: boolean,
      commandText?: string,
      cancelText?: string,
      animated?: boolean,
      btnClass?: string,
      modalSize?: string,
      disableValidationSummary?: boolean,
      backdrop?: boolean,
      ignoreBackdropClick?: boolean,
      params?: any,
      success?: EventEmitter<any>
    }) {
    options.dataSource.resolveCommandModelByName({
      command: options.command,
      model: options.model,
      params: options.params
    }).subscribe(commandModel => {
      const initialState = {
        dataSource: options.dataSource,
        command: options.command,
        commandModel,
        template: options.template,
        title: options.commandTitle,
        disableValidationSummary: options.disableValidationSummary === undefined ? false : options.disableValidationSummary,
        refreshOnSuccess: options.refreshOnSuccess === undefined ? true : options.refreshOnSuccess,
        commandText: options.commandText || 'OK',
        cancelText: options.cancelText || 'Cancel',
        successEmitter: options.success,
        btnClass: options.btnClass || 'primary'
      };
      this.modalService.show(CommandModalComponent, {
        animated: options.animated === undefined ? true : options.animated,
        class: options.modalSize,
        initialState,
        backdrop: options.backdrop === undefined ? true : options.backdrop,
        ignoreBackdropClick: options.ignoreBackdropClick === undefined ? false : options.ignoreBackdropClick
      });
    }, error => {

    });
  }
}
