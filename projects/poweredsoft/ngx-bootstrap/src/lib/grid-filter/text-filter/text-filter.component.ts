import { Component, OnInit, Input, OnDestroy, Output,EventEmitter } from '@angular/core';
import { IDataSource, IQueryExecutionResult, IQueryExecutionGroupResult } from '@poweredsoft/data';
import { Subscription } from 'rxjs';
import { IFilter, ISimpleFilter } from '../../models/IFilter';


@Component({
  selector: 'psbx-ds-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit {

  @Input() dataSource : IDataSource<any>;   
  @Output() onFilter: EventEmitter<IFilter> = new EventEmitter();
  title = 'Welcome word';
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
 
  private _searchTerm: string;
 
  filterType: string = 'Contains';
  filterValue: string = null;

  get filterTypes(){
    return ["contains","equals","startsWith"]
  }

  constructor() { }
 

  ngOnInit(): void {
    
  }

  applyFilter(){
    this.onFilter.emit(<ISimpleFilter>{
      path: "name",
      value: this.filterValue,
      type: this.filterType,
      and: true
    });
  }
}
