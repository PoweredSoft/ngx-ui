import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DsCommandDemoPageComponent } from './ds-command-demo-page/ds-command-demo-page.component';


const routes: Routes = [
  {
    path: '',
    component: DsCommandDemoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsCommandDemoRoutingModule { }
