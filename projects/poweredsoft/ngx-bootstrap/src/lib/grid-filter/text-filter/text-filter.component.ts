import { Component, OnInit, Input, OnDestroy, Output,EventEmitter } from '@angular/core';
import { IDataSource, IQueryExecutionResult, IQueryExecutionGroupResult } from '@poweredsoft/data';
import { Subscription } from 'rxjs';


@Component({
  selector: 'psbx-ds-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit, OnDestroy {

  @Input() dataSource : IDataSource<any>;   
  @Output() filteredResults: EventEmitter<any> = new EventEmitter();
  latestResult: IQueryExecutionResult<any> & IQueryExecutionGroupResult<any>;
  
  private _dataSubscription: Subscription;
  private _searchTerm: string;
 

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;    
    //this.filteredResults.emit(this.dataFilter(value));
  }

  // dataFilter(searchString: string) {
  //   return this.latestResult.data.filter(x =>
  //     x.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  // }

  constructor() { }
  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._dataSubscription = this.dataSource.data$.subscribe(newData => {
      this.latestResult = newData;
    });
  }

}
