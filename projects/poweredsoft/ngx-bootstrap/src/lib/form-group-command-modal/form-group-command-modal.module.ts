import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupCommandModalComponent } from './form-group-command-modal/form-group-command-modal.component';
import { FormGroupCommandModalDirective } from './directives/form-group-command-modal.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [FormGroupCommandModalComponent, FormGroupCommandModalDirective],
  exports: [FormGroupCommandModalDirective]
})
export class FormGroupCommandModalModule { }
