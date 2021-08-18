import { Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { Subscription } from 'rxjs';
import { ViewContentDirective } from './directives/view-content.directive';
import { ViewLoadingDirective } from './directives/view-loading.directive';
import { ViewNoRecordsDirective } from './directives/view-no-records.directive';

@Component({
  selector: 'ps-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
 

  constructor() { }

  @Input() dataSource: IDataSource<any>;
  @Input() noRecordsText: string;
  @Input() loadingText: string;
  @Input() noRecordClasses: any;

  @ContentChild(ViewContentDirective) viewContent: ViewContentDirective;
  @ContentChild(ViewLoadingDirective) viewLoading: ViewLoadingDirective;
  @ContentChild(ViewNoRecordsDirective) viewNoRecords: ViewNoRecordsDirective;

  loading:boolean = false;
  private _viewModel: any = null;

  private _dataSubscription: Subscription;
  private _loadingSubscription: Subscription;

  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
    this._loadingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._dataSubscription = this.dataSource.data$.subscribe(newData => { 
      if (newData && newData.data && newData.data.length)     
        this._viewModel = newData.data[0];
    });

    this._loadingSubscription = this.dataSource.loading$.subscribe(loading => {
      this.loading = loading;
    });
  }

  get noData(){
    return this._viewModel ? false : true;
  }

  get viewModel() {
    return this._viewModel;
  }

  get noRecords(){
    return this.noRecordsText || "No records...";
  }

  get finalLoadingText() {
    return this.loadingText || 'Loading ...';
  }

  getViewContentTemplate(){
    if(this.viewContent == null)
      return null;
    return this.viewContent.template;
  }

  getViewNoRecordsTemplate(){
    if(this.viewNoRecords == null)
      return null;
    return this.viewNoRecords.template;
  }

  getViewLoadingTemplate(){
    if(this.viewLoading == null)
      return null;
    return this.viewLoading.template;
  }

}

