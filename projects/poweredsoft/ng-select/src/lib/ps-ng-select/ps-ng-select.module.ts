import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectLabelTemplateDirective } from './directives/select-label-template.directive';
import { SelectOptionTemplateDirective } from './directives/select-option-template.directive';
import { NotFoundTemplateDirective } from './directives/not-found-template.directive';
import { SelectFooterTemplateDirective } from './directives/select-footer-template.directive';



@NgModule({
  declarations: [NgSelectComponent, MultiSelectComponent, SelectLabelTemplateDirective, SelectOptionTemplateDirective, NotFoundTemplateDirective, SelectFooterTemplateDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
  ],
  exports:[
    NgSelectComponent,
    MultiSelectComponent,
    SelectLabelTemplateDirective,
    SelectOptionTemplateDirective,
    SelectFooterTemplateDirective,
    NotFoundTemplateDirective
  ]
})
export class PsNgSelectModule { }//NGSELECT
