import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';
import { IQueryExecutionResult, IQueryExecutionGroupResult, IDataSource } from '@poweredsoft/data';
import { DataGridColDirective } from '../directives/DataGridCol.directive';

@Component({
  selector: 'ps-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  latestResult: IQueryExecutionResult<any> & IQueryExecutionGroupResult<any>;
  pages: any[];

  @ContentChildren(DataGridColDirective) headers: QueryList<DataGridColDirective>;
  
  @Input() columns: string[];
  @Input() dataSource: IDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data$.subscribe(newData => {
      this.latestResult = newData;
      if (newData)
        this.pages = new Array(newData.numberOfPages);
    });
  }

  getColumn(columnName: string) {
    
    const ret = this.headers.find(t => 
    {
      return t.columnName == columnName;
    });

    return ret;
  }

  getColumnHeaderTemplate(columnName: string) {
    const ret = this.getColumn(columnName);
    if (ret && ret.headerTemplate) 
      return ret.headerTemplate.template;

    return null;
  } 

  getColumnCellTemplate(columnName: string) {
    const ret = this.getColumn(columnName);
    if (ret && ret.cellTemplate) 
      return ret.cellTemplate.template;

    return null;
  } 

  hasHeaderTemplate(columnName: string) {
    return this.getColumnHeaderTemplate(columnName) ? true :false;
  }

  hasCellTemplate(columnName: string) {
    return this.getColumnCellTemplate(columnName) ? true :false;
  }


}
