import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewDemoHomeComponent } from './list-view-demo-home/list-view-demo-home.component';


const routes: Routes = [
  {
    path: '',
    component: ListViewDemoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListViewDemoRoutingModule { }
