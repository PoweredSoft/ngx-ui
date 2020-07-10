import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IDataSource, ISimpleFilter, ICompositeFilter, IFilter,FilterType } from '@poweredsoft/data';



@Component({
  selector: 'psbx-ds-datetime-filter',
  templateUrl: './data-source-datetime-filter.component.html',
  styleUrls: ['./data-source-datetime-filter.component.scss']
})
export class DataSourceDatetimeFilterComponent implements OnInit {

  @Input() path: string;
  @Input() dataSource : IDataSource<any>; 
  @Input() filterType: string;
  @Output() filterTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  filterPopUpOpened: boolean = false; 
  isFiltering: boolean;
  filterValue: Date = null; 
  filterTypes = [
    {key:'Equal', value: 'Equal'},
    {key:'Greater Than', value: 'GreaterThan'},
    {key:'Less Than', value: 'LessThan'},    
    {key:'Greater Than Equal', value: 'GreaterThanOrEqual'},
    {key:'Less Than Equal', value: 'LessThanOrEqual'},    
    {key:'Range', value: FilterType.COMPOSITE }
  ];


  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
 
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  get isRangeFilter() {
    return this.filterType == FilterType.COMPOSITE;
  }

  ngOnInit(): void {
    if (!this.filterType)
      this.filterType = 'Equal';
  }
  showTooltip(){
    return "Filter by "+ this.path;
  }
  clearFilter() {
    
    this.filterValue = null;
    this.isFiltering = false;
    const existingFilter = this.dataSource.filters.find(t => (t as ISimpleFilter).path == this.path) as ISimpleFilter;    
    if (existingFilter) {
      this.dataSource.query({
        page: 1,
        filters: this.dataSource.filters.filter(t => t != existingFilter)
      })
    }
    
    if (this.isRangeFilter){
     
      let existingFilter2 = this.dataSource.filters.find(t=> t.type == 'Composite');
      this.dataSource.query({
        page: 1,
        filters: this.dataSource.filters.filter(t => t != existingFilter2)
      })
    }
  }
  applyFilter(){

    this.isFiltering = true;
    const filters = this.dataSource.filters;
    let compositeF: any = null;
    let freshFilter: ISimpleFilter = null;
    let startDate:Date;
    let endDate:Date;

    // TODO create filter here.
    if(Array.isArray(this.filterValue)){ //check if it's a dateRange value 
      startDate = this.filterValue[0];
      endDate = this.filterValue[1];
      compositeF = {
        type: FilterType.COMPOSITE,
        filters: [
          {
            path: this.path,
            type: 'GREATERTHANOREQUAL',
            value: startDate, 
          },
          {
            and: true,
            path: this.path,
            type: 'LESSTHANOREQUAL',
            value: endDate,
          }
        ]
      }
     
    }else{
      freshFilter = {
        type: this.filterType,
        and: true,
        path: this.path,
        value: this.filterValue
      }
    }

    // TODO???
    // set this for gql better handling of variant.
    //(freshFilter as IGraphQLFilter).__gqlVariantType = 'DATETIME';

    
    const existingFilterIndex = filters.findIndex(t => {
        if (t.type == 'COMPOSITE') {
          const compositeFilter = t as ICompositeFilter;
          return compositeFilter.filters && compositeFilter.filters.length 
            && compositeFilter[0].path == this.path;
        } else {
          return (t as ISimpleFilter).path == this.path;
        }
    });

    if (existingFilterIndex == -1) {
      // create it.
      if(compositeF){                        
        filters.push(compositeF);
      }else{
        filters.push(freshFilter);
      }
     
    } else {
      // replace it.
      if(compositeF){
        filters[existingFilterIndex] = compositeF;
      }else{
        filters[existingFilterIndex] = freshFilter;
      }
    }

    this.dataSource.query({
      filters: filters,
      page: 1
    })
  }


}
