import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridFilterDemoComponent } from './grid-filter-demo/grid-filter-demo.component';


const routes: Routes = [{
  path: '',
  component: GridFilterDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridFilterDemoRoutingModule { }
