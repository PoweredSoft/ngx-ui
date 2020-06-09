import { Component, OnInit, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { IQueryExecutionResult, IQueryExecutionGroupResult, IDataSource } from '@poweredsoft/data';
import { DataGridColDirective } from '../directives/data-grid-col.directive';
import { DataGridHeaderDirective } from '../directives/data-grid-header.directive';
import { DataGridFooterDirective } from '../directives/data-grid-footer.directive';

@Component({
  selector: 'ps-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  latestResult: IQueryExecutionResult<any> & IQueryExecutionGroupResult<any>;
  pages: any[];

  @ContentChildren(DataGridColDirective) columnDefinitions: QueryList<DataGridColDirective>;
  @ContentChildren(DataGridHeaderDirective) gridHeaders: QueryList<DataGridHeaderDirective>;
  @ContentChildren(DataGridFooterDirective) gridFooters: QueryList<DataGridFooterDirective>;
  
  
  @Input() dataSource: IDataSource<any>;
  @Input() tableClasses: any;
  private _columns: string[];
  
  @Input() set columns(value: string[]) {
    this._columns = value;
    this.columnsChange.emit(value);
  }

  get columns() {
    return this._columns;
  }  

  @Output() columnsChange:EventEmitter<string []> = new EventEmitter<string []>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.columnDefinitions);
    this.dataSource.data$.subscribe(newData => {
      this.latestResult = newData;
      if (newData)
        this.pages = new Array(newData.numberOfPages);
    });
  }

  getColumn(columnName: string) {
    
    const ret = this.columnDefinitions.find(t => 
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
