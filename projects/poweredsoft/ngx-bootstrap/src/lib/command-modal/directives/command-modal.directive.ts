import { Directive, HostListener, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommandModalComponent } from '../command-modal/command-modal.component';

@Directive({
  selector: '[psbxCommandModal]'
})
export class CommandModalDirective {

  constructor(private modalService: BsModalService) { }


  @Input() dataSource: IDataSource<any>;
  @Input() command: string;
  @Input() model: any;
  @Input() template: TemplateRef<any>;
  @Input() commandTitle: string;
  @Input() refreshOnSuccess: boolean;
  @Input() commandText: string;
  @Input() cancelText: string;
  @Input() animated: boolean;
  @Input() btnClass:string;
  @Input() modalSize: string;
  @Input() disableValidationSummary: boolean;
  @Input() backdrop: boolean;
  @Input() ignoreBackdropClick: boolean;
  @Input() params: any;

  @Output() success: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click')
  wasClicked() {            
    this.dataSource.resolveCommandModelByName({
      command: this.command,
      model: this.model,
      params: this.params
    }).subscribe(commandModel => {         
      const initialState = {
        dataSource: this.dataSource,
        command: this.command,
        commandModel: commandModel,
        template: this.template,
        title: this.commandTitle,
        disableValidationSummary: this.disableValidationSummary === undefined ? false : this.disableValidationSummary,
        refreshOnSuccess: this.refreshOnSuccess === undefined ? true : this.refreshOnSuccess,
        commandText: this.commandText || 'OK',
        cancelText: this.cancelText || 'Cancel',
        successEmitter: this.success,
        btnClass: this.btnClass || 'primary'
      };
      this.modalService.show(CommandModalComponent, {
        animated: this.animated === undefined ? true : this.animated,
        class: this.modalSize,
        initialState,
        backdrop: this.backdrop === undefined ? true : this.backdrop,
        ignoreBackdropClick: this.ignoreBackdropClick === undefined ? false : this.ignoreBackdropClick
      });

    }, error => {

    });
  }
}
