import { Component, OnInit, ContentChildren, QueryList, Input, Output, EventEmitter, ContentChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IQueryExecutionResult, IQueryExecutionGroupResult, IDataSource } from '@poweredsoft/data';
import { DataGridColDirective } from '../directives/data-grid-col.directive';
import { DataGridHeaderDirective } from '../directives/data-grid-header.directive';
import { DataGridFooterDirective } from '../directives/data-grid-footer.directive';
import { DataGridLoaderDirective } from '../directives/data-grid-loader.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy {

  latestResult: IQueryExecutionResult<any> & IQueryExecutionGroupResult<any>;
  loading:boolean;

  @ContentChildren(DataGridColDirective) columnDefinitions: QueryList<DataGridColDirective>;
  @ContentChildren(DataGridHeaderDirective) gridHeaders: QueryList<DataGridHeaderDirective>;
  @ContentChildren(DataGridFooterDirective) gridFooters: QueryList<DataGridFooterDirective>;
  @ContentChildren(DataGridLoaderDirective) loaders: QueryList<DataGridLoaderDirective>;
  
  @Input() dataSource: IDataSource<any>;
  @Input() tableClasses: any;
  @Input() noRecordsText: string;

  private _columns: string[];
  private _dataSubscription: Subscription;
  private _loadingSubscription: Subscription;

  @Input() set columns(value: string[]) {
    this._columns = value;
    this.columnsChange.emit(value);
  }

  get columns() {
    return this._columns;
  }  

  @Output() columnsChange:EventEmitter<string []> = new EventEmitter<string []>();

  

  get noData() {
    return !this.latestResult || this.latestResult.totalRecords == 0; 
  }

  get noRecordsDisplayText() {
    return this.noRecordsText || 'No records';
  }

  constructor(private cdr: ChangeDetectorRef) { 

  }

  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
    this._loadingSubscription.unsubscribe();
  }

  ngOnInit(): void {
  
    this._dataSubscription = this.dataSource.data$.subscribe(newData => {
      this.latestResult = newData;
    });

    this._loadingSubscription = this.dataSource.loading$.subscribe(isLoading => {
      this.loading = isLoading;
      this.cdr.detectChanges();
    });

    console.log(this.loaders);
  }

  getColumn(columnName: string) {
    
    if (!this.columnDefinitions)
      return null;

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
