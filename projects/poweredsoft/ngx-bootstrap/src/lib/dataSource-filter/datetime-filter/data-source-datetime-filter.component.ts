import { Component, OnInit, Input } from '@angular/core';
import { IDataSource, ISimpleFilter } from '@poweredsoft/data';

@Component({
  selector: 'psbx-ds-datetime-filter',
  templateUrl: './data-source-datetime-filter.component.html',
  styleUrls: ['./data-source-datetime-filter.component.scss']
})
export class DataSourceDatetimeFilterComponent {

  @Input() path: string;
  @Input() dataSource : IDataSource<any>; 
  filterPopUpOpened: boolean = false; 
  isFiltering: boolean;
  filterValue: Date = null; 
  filterType: string = 'Equal';
  filterTypes = [
    {key:'equal', value: 'Equal'},
    {key:'Greater Than', value: 'GreaterThan'},
    {key:'Less Than', value: 'LessThan'},    
    {key:'Greater Than Equal', value: 'GreaterThanOrEqual'},
    {key:'Less Than Equal', value: 'LessThanOrEqual'},    
  ];


  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
 
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  showTooltip(){
    return "Filter by "+ this.path;
  }

  applyFilter(){
    this.isFiltering = true;
    const filters = this.dataSource.filters;
    const existingFilter = filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;
    if (existingFilter) {
      existingFilter.type = this.filterType;
      existingFilter.value = this.filterValue.toString()
    } else {
      filters.push(<ISimpleFilter>{
        and: true,
        type: this.filterType,
        path: this.path, 
        value: this.filterValue.toString()
      })
    }

    this.dataSource.query({
      filters: filters,
      page: 1
    })
  }


}
