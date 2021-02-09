import { Component, Input, OnInit } from '@angular/core';
import { FilterType, ICompositeFilter, IDataSource, ISimpleFilter } from '@poweredsoft/data';

@Component({
  selector: 'ps-ds-search',
  templateUrl: './ds-search.component.html',
  styleUrls: ['./ds-search.component.scss']
})
export class DsSearchComponent implements OnInit {

  @Input() dataSource: IDataSource<any>;
  @Input() filterType: string;
  @Input() filterPaths: string[];
  @Input() searchText: string;
  @Input() submitButtonClasses: any;
  @Input() searchClasses: any;
  @Input() classes: any;

  filterValue: string = null;
  lastUsedFilter: any;

  constructor() { }

  get finalSearchText() {
    return this.searchText ?? "Search";
  }

  get finalFilterType() {
    return this.filterType ?? FilterType.CONTAINS;
  }

  onSearch() {
      this.applySearch();
  }

  applySearch() {

    const existingFilters = this.dataSource.filters;


    // adapt current filters to remove the previous one if exist
    // and replace with new one.
    const finalNewFilters = existingFilters
      .filter(t => t != this.lastUsedFilter);

    if (this.filterValue) {
      const newFilter: ICompositeFilter = {
        and: true,
        type: FilterType.COMPOSITE,
        filters: this.filterPaths.map(filterPath => (<ISimpleFilter>{
          path: filterPath,
          type: this.finalFilterType,
          value: this.filterValue,
          and: false
        }))
      }

      finalNewFilters.push(newFilter);

      // update last used filter to replace it if changed.
      this.lastUsedFilter = newFilter;
    } else {
      this.lastUsedFilter = null;
    }

    // execute search.
    this.dataSource.query({
      page: 1,
      filters: finalNewFilters
    })
  }

  ngOnInit(): void {
  }

}
