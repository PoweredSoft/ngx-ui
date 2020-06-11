import { Component, OnInit, Input } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';

@Component({
  selector: 'psbx-ds-pagination',
  templateUrl: './data-source-pagination.component.html',
  styleUrls: ['./data-source-pagination.component.scss']
})
export class DataSourcePaginationComponent implements OnInit {

  @Input() pages: any[];
  @Input() dataSource: IDataSource<any>

  totalItems:Number;

  constructor() { }

  pageChanged(event){
    this.dataSource.page = event.page;
  }

  ngOnInit(): void {
    
  }

}
