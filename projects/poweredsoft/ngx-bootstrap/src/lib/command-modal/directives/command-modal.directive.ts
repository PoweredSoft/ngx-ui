import { Directive, HostListener, Input, TemplateRef } from '@angular/core';
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

  @HostListener('click')
  wasClicked() {    
    this.dataSource.resolveCommandModelByName({
      command: this.command,
      model: this.model
    }).subscribe(commandModel => {      
      const initialState = {
        dataSource: this.dataSource,
        command: this.command,
        commandModel: commandModel,
        template: this.template,
        title: this.commandTitle,
        refreshOnSuccess: this.refreshOnSuccess === undefined ? true : this.refreshOnSuccess,
        commandText: this.commandText || 'OK',
        cancelText: this.cancelText || 'Cancel'
      };
      this.modalService.show(CommandModalComponent, {
        animated: this.animated === undefined ? true : this.animated,
        initialState
      });

    }, error => {

    });
  }


}
