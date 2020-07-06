import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectLabelTemplateDirective } from './select-label-template.directive';



@NgModule({
  declarations: [NgSelectComponent, MultiSelectComponent, SelectLabelTemplateDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
  ],
  exports:[
    NgSelectComponent,
    MultiSelectComponent,
    SelectLabelTemplateDirective
  ]
})
export class PsNgSelectorsModule { }
