import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsValidationErrorComponent } from './ds-validation-error.component';



@NgModule({
  declarations: [DsValidationErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [DsValidationErrorComponent]
})
export class DsValidationErrorModule { }
