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
  filterTypes = ['contains', 'equal', 'startsWith','endsWith'];

  constructor() { }
 

  ngOnInit(): void {
    
  }

  clearFilter() {
    const existingFilter = this.dataSource.filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;
    if (existingFilter) {
      this.dataSource.query({
        page: 1,
        filters: this.dataSource.filters.filter(t => t != existingFilter)
      })
    }
  }

  applyFilter(){

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
}
