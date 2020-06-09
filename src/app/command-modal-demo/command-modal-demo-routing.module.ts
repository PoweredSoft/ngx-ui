import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandModalDemoComponent } from './command-modal-demo/command-modal-demo.component';



const routes: Routes = [
  {
    path: '',
    component: CommandModalDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandModalDemoRoutingModule { }
