import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourcePaginationComponent } from './data-source-pagination/data-source-pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [DataSourcePaginationComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
  ],
  exports:[DataSourcePaginationComponent]
})
export class psbxPaginationModule { }
