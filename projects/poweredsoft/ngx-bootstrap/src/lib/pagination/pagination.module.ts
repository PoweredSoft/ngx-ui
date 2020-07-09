import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourcePaginationComponent } from './data-source-pagination/data-source-pagination.component';
import { PaginationModule as ValorPaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DataSourcePaginationComponent],
  imports: [
    CommonModule,
    ValorPaginationModule.forRoot(),
    FormsModule
  ],
  exports:[DataSourcePaginationComponent]
})
export class PaginationModule { }
