import { Directive, Input, TemplateRef, HostListener, Output, EventEmitter } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { finalize } from 'rxjs/operators';
import { ConfirmModalService } from '../../confirm-modal/confirm-modal.service';

@Directive({
  selector: '[psbxCommand]'
})
export class CommandDirective {

  constructor(private confirmModalService: ConfirmModalService) { }


  @Input() dataSource: IDataSource<any>;
  @Input() command: string;
  @Input() model: any;
  @Input() refreshOnSuccess: boolean;
  @Input() animated: boolean;
  @Input() params: any;

  @Input() confirm: boolean;
  @Input() confirmMessage: string;
  @Input() yesText: string;
  @Input() noText: string;
  @Input() yesClass: string;
  @Input() noClass: string;

  @Output() success: EventEmitter<any> = new EventEmitter<any>();
  @Output() failure: EventEmitter<any> = new EventEmitter<any>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  private doCommand() {
    this.dataSource.resolveCommandModelByName({
      command: this.command,
      model: this.model,
      params: this.params
    }).subscribe(commandModel => {
      this.loading.emit(true);
      this.dataSource.executeCommandByName(this.command, commandModel)
        .pipe(
          finalize(() => this.loading.emit(false))
        )
        .subscribe(
          commandResult => {
            if (this.refreshOnSuccess !== false)
              this.dataSource.refresh();

            this.success.emit(commandResult);
          },
          commandError => {
            this.failure.emit(commandError);
          }
        );
      }, resolveCommandError => {
        this.failure.emit(resolveCommandError);
      });
  }


  @HostListener('click')
  wasClicked() {

    if (this.confirm) {
      this.confirmModalService.confirm({
        message: this.confirmMessage,
        yesText: this.yesText || 'yes',
        yesClass: this.yesClass || 'danger',
        noText: this.noText || 'no',
        noClass: this.noClass || 'light',
      }).subscribe(result => {
        if (result)
          this.doCommand();
      })
    } else {
      this.doCommand();
    }
  }

}
