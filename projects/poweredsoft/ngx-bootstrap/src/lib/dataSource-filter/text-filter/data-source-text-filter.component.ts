import { Component, OnInit, Input } from '@angular/core';
import { IDataSource} from '@poweredsoft/data';
import { ISimpleFilter } from '../../models/IFilter';
import { PopoverDirective } from 'ngx-bootstrap/popover';


@Component({
  selector: 'psbx-ds-text-filter',
  templateUrl: './data-source-text-filter.component.html',
  styleUrls: ['./data-source-text-filter.component.scss']
})
export class DataSourceTextFilterComponent implements OnInit {

  @Input() dataSource : IDataSource<any>;   
  @Input() path:string;
 
  filterType: string = 'Contains';
  filterValue: string = null; 
  isFiltering: boolean;
  filterTypes = [
    {key:'Contains', value: 'Contains'}, 
    {key:'Equals', value: 'Equal'}, 
    {key:'Starts With', value: 'startsWith'},
    {key:'Ends With', value: 'endsWith'}
  ];
  filterIsOpenned: boolean = false;

  constructor() { }
 

  ngOnInit(): void {
    
  }

  clearFilter() {
    this.filterValue = '';
    this.isFiltering = false;
    const existingFilter = this.dataSource.filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;
    if (existingFilter) {
      this.dataSource.query({
        page: 1,
        filters: this.dataSource.filters.filter(t => t != existingFilter)
      })
    }
  }

  applyFilter(pop: PopoverDirective = null){
    this.isFiltering = true;
    const filters = this.dataSource.filters;
    const existingFilter = filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;
    if (existingFilter) {
      existingFilter.type = this.filterType;
      existingFilter.value = this.filterValue;
    } else {
      filters.push(<ISimpleFilter>{
        and: true,
        type: this.filterType,
        path: this.path, 
        value: this.filterValue
      })
    }

    this.dataSource.query({
      filters: filters,
      page: 1
    })

    if (pop) 
      pop.hide();
  }

  showTooltip(){
    return "Filter by "+ this.path;
  }
}
