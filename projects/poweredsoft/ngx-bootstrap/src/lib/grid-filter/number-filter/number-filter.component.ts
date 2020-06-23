import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDataSource,IFilter } from '@poweredsoft/data';
import { ISimpleFilter } from '../../models/IFilter';

@Component({
  selector: 'psbx-number-filter',
  templateUrl: './number-filter.component.html',
  styleUrls: ['./number-filter.component.scss']
})
export class NumberFilterComponent implements OnInit {
  @Input() dataSource : IDataSource<any>;   
  @Output() onFilter: EventEmitter<IFilter> = new EventEmitter();
  @Input() columnName:string;
 
  filterType: string = 'Contains';
  filterValue: string = null;

  get filterTypes(){
    return ["contains","equals","startsWith","GreaterThan","LessThan"]
  }

  constructor() { }
 

  ngOnInit(): void {
    
  }

  applyFilter(){
    this.onFilter.emit(<ISimpleFilter>{
      path: this.columnName,
      value: this.filterValue,
      type: this.filterType,
      and: true
    });
  }
}
