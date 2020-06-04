import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataGridDemoHomeComponent } from './data-grid-demo-home/data-grid-demo-home.component';


const routes: Routes = [
  {
    path: '',
    component: DataGridDemoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataGridDemoRoutingModule { }
