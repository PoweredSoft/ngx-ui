import { Component, OnInit, Input } from '@angular/core';
import { IDataSource} from '@poweredsoft/data';
import { ISimpleFilter } from '../../models/IFilter';


@Component({
  selector: 'psbx-ds-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit {

  @Input() dataSource : IDataSource<any>;   
  @Input() path:string;
 
  filterType: string = 'Contains';
  filterValue: string = null; 
  isFiltering: boolean;
  filterTypes = [
    {key:'contains', value: 'Contains'}, 
    {key:'equal', value: 'Equal'}, 
    {key:'startsWith', value: 'Starts With'},
    {key:'endsWith', value: 'Ends With'}
  ];
  filterIsOpenned: boolean = false;

  constructor() { }
 

  ngOnInit(): void {
    
  }

  clearFilter() {
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
  }

  showTooltip(){
    return "Filter by "+ this.path;
  }
}
