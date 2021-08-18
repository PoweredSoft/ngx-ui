import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDemoPageComponent } from './view-demo-page/view-demo-page.component';


const routes: Routes = [
  {
    path: '',
    component: ViewDemoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDemoRoutingModule { }
