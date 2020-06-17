import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourcePaginationComponent } from './data-source-pagination/data-source-pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DataSourcePaginationComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports:[DataSourcePaginationComponent]
})
export class psbxPaginationModule { }
