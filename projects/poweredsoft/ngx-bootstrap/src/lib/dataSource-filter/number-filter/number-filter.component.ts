import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { IDataSource,IFilter } from '@poweredsoft/data';
import { ISimpleFilter } from '../../models/IFilter';

@Component({
  selector: 'psbx-ds-number-filter',
  templateUrl: './number-filter.component.html',
  styleUrls: ['./number-filter.component.scss']
})
export class NumberFilterComponent implements OnInit {
  @Input() dataSource : IDataSource<any>;   
  @Input() path:string;
 
  filterType: string = 'Equals';
  filterValue: number = 0; 
  isFiltering: boolean;
  filterTypes = [    
    {key:'Equals', value: 'Equal'}, 
    {key:'Greater Than', value: 'GreaterThan'},
    {key:'Less Than', value: 'LessThan'},    
    {key:'Greater Than Equal', value: 'GreaterThanOrEqual'},
    {key:'Less Than Equal', value: 'LessThanOrEqual'},    
  ];
  filterIsOpenned: boolean = false;

  constructor() { }
 

  ngOnInit(): void {

    
  }

  clearFilter() {
    this.filterValue = 0;
    this.isFiltering = false;
    const existingFilter = this.dataSource.filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;
    if (existingFilter) {
      this.dataSource.query({
        page: 1,
        filters: this.dataSource.filters.filter(t => t != existingFilter)
      })
    }
  }

  applyFilter(){
    this.isFiltering = true;
    const filters = this.dataSource.filters;
    const existingFilter = filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;
    if (existingFilter) {
      existingFilter.type = this.filterType;
      existingFilter.value =this.filterValue.toString();
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

  showTooltip(){
    return "Filter by "+ this.path;
  }
}
