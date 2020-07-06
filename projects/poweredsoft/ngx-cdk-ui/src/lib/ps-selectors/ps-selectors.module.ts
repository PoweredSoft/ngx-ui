import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgMultiSelectComponent } from './ng-multi-select/ng-multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectOptionTemplateDirective } from './select-option-template.directive';



@NgModule({
  declarations: [NgSelectComponent, NgMultiSelectComponent, SelectOptionTemplateDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
  ],
  exports:[NgSelectComponent,NgMultiSelectComponent,SelectOptionTemplateDirective]
})
export class PsSelectorsModule { }
