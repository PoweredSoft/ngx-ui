import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { ListViewItemDirective } from './directives/list-view-item.directive';
import { ListViewHeaderDirective } from './directives/list-view-header.directive';
import { ListViewFooterDirective } from './directives/list-view-footer.directive';
import { ListViewSeperatorDirective } from './directives/list-view-seperator.directive';



@NgModule({
  declarations: [ListViewComponent, ListViewItemDirective, ListViewHeaderDirective, ListViewFooterDirective, ListViewSeperatorDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ListViewComponent,
    ListViewItemDirective,
    ListViewHeaderDirective,
    ListViewFooterDirective,
    ListViewSeperatorDirective

  ]
})
export class ListViewModule { }
