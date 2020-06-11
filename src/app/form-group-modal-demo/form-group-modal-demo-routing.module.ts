import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroupModalDemoComponent } from './form-group-modal-demo/form-group-modal-demo.component';


const routes: Routes = [{
  path: '',
  component: FormGroupModalDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGroupModalDemoRoutingModule { }
