import { Directive, Input, TemplateRef, HostListener } from '@angular/core';
import { ConfirmModalService } from './confirm-modal.service';
import { IDataSource } from '@poweredsoft/data';

@Directive({
  selector: '[psbxConfirmModal]'
})
export class ConfirmModalDirective {

  constructor(private confirmModalService: ConfirmModalService) { }


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
      this.confirmModalService.confirm({
        message: 'Do you want to delete this merchant?',
        yesText: 'yes delete this merchant',
        yesClass: 'danger',
        noText: 'no please dont',
        noClass: 'light'
      }).subscribe(result => {
        if(result){
          this.dataSource.executeCommandByName(this.command, commandModel).subscribe(      
            res => {
              this.dataSource.refresh();
            },
            err => {
              console.log(err);
              alert('failed');
            }
          );
        }
      })

    }, error => {

    });
  }

}
