import { Directive, Input, TemplateRef, HostListener, Output, EventEmitter } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroupCommandModalComponent } from '../form-group-command-modal/form-group-command-modal.component';
import { FormGroup } from '@angular/forms';
import { ConfirmModalComponent } from '../../confirm-modal/confirm-modal-components/confirm-modal/confirm-modal.component';

export interface IModelFormCreateEvent
{
  shouldSetCommandModel: boolean;
  viewModel: any;
  commandName: string;
  commandModel: any;
  formGroup?: FormGroup;
}

@Directive({
  selector: '[psbxFormGroupCommandModal]'
})
export class FormGroupCommandModalDirective {


  @Input() dataSource: IDataSource<any>;
  @Input() command: string;
  @Input() model: any;
  @Input() template: TemplateRef<any>;
  @Input() commandTitle: string;
  @Input() animated: boolean;
  @Input() refreshOnSuccess: boolean;
  @Input() commandText: string;
  @Input() cancelText: string;
  @Input() isConfirmModal:boolean;
  @Output() formCreate: EventEmitter<IModelFormCreateEvent> = new EventEmitter<IModelFormCreateEvent>();

  constructor(private modalService: BsModalService) { }

  @HostListener('click')
  wasClicked() {
    this.dataSource.resolveCommandModelByName({
      command: this.command,
      model: this.model
    }).subscribe(commandModel => {
      const event = <IModelFormCreateEvent>{
        commandName: this.command,
        viewModel: this.model,
        commandModel: commandModel,
        shouldSetCommandModel: true
      }

      if(this.isConfirmModal){

        const initialState = {
          dataSource: this.dataSource,
          command: this.command,
          template: this.template,
          title: this.commandTitle,
          refreshOnSuccess: this.refreshOnSuccess === undefined ? true : this.refreshOnSuccess,
          commandText: this.commandText || 'OK',
          cancelText: this.cancelText || 'Cancel',
          commandModel:commandModel
        };
      
        this.modalService.show(ConfirmModalComponent, {
          animated: this.animated === undefined ? true : this.animated,
          initialState
        });

      }else{
        this.formCreate.emit(event);
        if (event.formGroup == null)
          throw new Error('form group should be set, after form createEvent');

        if (event.shouldSetCommandModel)
          event.formGroup.patchValue(commandModel);

        const initialState = {
          dataSource: this.dataSource,
          command: this.command,
          template: this.template,
          title: this.commandTitle,
          refreshOnSuccess: this.refreshOnSuccess === undefined ? true : this.refreshOnSuccess,
          commandText: this.commandText || 'OK',
          cancelText: this.cancelText || 'Cancel',
          modelForm: event.formGroup,
          commandModel:commandModel
        };
      
        this.modalService.show(FormGroupCommandModalComponent, {
          animated: this.animated === undefined ? true : this.animated,
          initialState
        });
      }
    }, error => {

    });
  }

  // @HostListener('click')
  // wasClicked() {
  //   this.dataSource.resolveCommandModelByName({
  //     command: this.command,
  //     model: this.model
  //   }).subscribe(commandModel => {
  //     debugger;
  //     const event = <IModelFormCreateEvent>{
  //       commandName: this.command,
  //       viewModel: this.model,
  //       commandModel: commandModel,
  //       shouldSetCommandModel: true
  //     }

  //     this.formCreate.emit(event);

  //     if (event.formGroup == null)
  //       throw new Error('form group should be set, after form createEvent');

  //     if (event.shouldSetCommandModel)
  //       event.formGroup.patchValue(commandModel);

  //     const initialState = {
  //       dataSource: this.dataSource,
  //       command: this.command,
  //       template: this.template,
  //       title: this.commandTitle,
  //       refreshOnSuccess: this.refreshOnSuccess === undefined ? true : this.refreshOnSuccess,
  //       commandText: this.commandText || 'OK',
  //       cancelText: this.cancelText || 'Cancel',
  //       modelForm: event.formGroup,
  //       commandModel:commandModel
  //     };
      
  //     this.modalService.show(FormGroupCommandModalComponent, {
  //       animated: this.animated === undefined ? true : this.animated,
  //       initialState
  //     });

  //   }, error => {

  //   });
  // }

}
