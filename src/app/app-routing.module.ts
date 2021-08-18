import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data-grid',
    loadChildren: () => import('./data-grid-demo/data-grid-demo.module').then(m => m.DataGridDemoModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view-demo/view-demo.module').then(m => m.ViewDemoModule)
  },
  {
    path: 'list-view',
    loadChildren: () => import('./list-view-demo/list-view-demo.module').then(m => m.ListViewDemoModule)
  },
  {
    path: 'command-modal',
    loadChildren: () => import('./command-modal-demo/command-modal-demo.module').then(m => m.CommandModalDemoModule)
  },
  {
    path: 'form-group',
    loadChildren: () => import('./form-group-modal-demo/form-group-modal-demo.module').then(m => m.FormGroupModalDemoModule)
  },
  {
    path: 'pagination-demo',
    loadChildren: ()=> import('./pagination-demo/pagination-demo.module').then(m => m.PaginationDemoModule)
  },
  {
    path: 'grid-filter',
    loadChildren: ()=> import('./grid-filter&sorting-demo/grid-filter-demo.module').then(m => m.GridFilterDemoModule)
  },
  {
    path: 'select',
    loadChildren: ()=> import('./ng-select-demo/ng-select-demo.module').then(m => m.NgSelectDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
