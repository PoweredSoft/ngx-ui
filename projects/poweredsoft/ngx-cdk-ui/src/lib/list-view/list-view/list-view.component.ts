import { Component, OnInit, Input, OnDestroy, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { IDataSource, IQueryExecutionResult, IQueryExecutionGroupResult } from '@poweredsoft/data';
import { Subscription } from 'rxjs';
import { ListViewItemDirective } from '../directives/list-view-item.directive';
import { ListViewHeaderDirective } from '../directives/list-view-header.directive';
import { ListViewFooterDirective } from '../directives/list-view-footer.directive';

@Component({
  selector: 'ps-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, OnDestroy {

  @Input() dataSource: IDataSource<any>;
  @Input() noRecordsText: string;

  latestResult: IQueryExecutionResult<any> & IQueryExecutionGroupResult<any>;
  loading:boolean;

  private _dataSubscription: Subscription;
  
   @ContentChild(ListViewItemDirective) viewItem: ListViewItemDirective;
   @ContentChild(ListViewHeaderDirective) viewHeader: ListViewHeaderDirective;
   @ContentChild(ListViewFooterDirective) viewFooter: ListViewFooterDirective;
  //@ContentChildren(ViewDataDirective) viewData: QueryList<ViewDataDirective>;

  constructor() { 
  
  }

  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._dataSubscription = this.dataSource.data$.subscribe(newData => {      
      this.latestResult = newData;
    });
  }

  get noData(){
    return !this.latestResult;
  }

  get noRecords(){
    return this.noRecordsText || "No records...";
  }

  getViewItemTemplate(){
    if(this.viewItem == null)
      return null;
    return this.viewItem.template;
  }

  getViewHeaderTemplate(){
    if(this.viewHeader == null)
      return null;
    return this.viewHeader.template;
  }


  getViewFooterTemplate(){
    if(this.viewFooter == null)
      return null;
    return this.viewFooter.template;
  }
}
