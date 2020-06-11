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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
