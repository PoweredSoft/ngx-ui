import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewContentDirective } from './directives/view-content.directive';
import { ViewLoadingDirective } from './directives/view-loading.directive';
import { ViewNoRecordsDirective } from './directives/view-no-records.directive';



@NgModule({
  declarations: [ViewComponent, ViewContentDirective, ViewLoadingDirective, ViewNoRecordsDirective],
  imports: [
    CommonModule
  ],
  exports: [ViewComponent, ViewContentDirective, ViewLoadingDirective, ViewNoRecordsDirective]
})
export class ViewModule { }
