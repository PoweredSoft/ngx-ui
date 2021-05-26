import { Component, OnInit, Input } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';

@Component({
  selector: 'psbx-ds-sorting',
  templateUrl: './data-source-sorting.component.html',
  styleUrls: ['./data-source-sorting.component.scss']
})
export class DataSourceSortingComponent implements OnInit {

  @Input() dataSource : IDataSource<any>;
  @Input() path:string; 
  
  
  get sort() {
    return this.dataSource.sorts.find(t => t.path == this.path);
  }

  get isSorting() {
    return this.sort ? true : false;
  }

  get isAscending() {
    return !this.isSorting ? true : this.sort.ascending;
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  sorting(){

    if (!this.isSorting) {
      this.dataSource.sorts.push({
        path: this.path,
        ascending: true
      });
    } else if(this.isSorting && this.isAscending) {
      this.sort.ascending = false;
    } else {
      this.dataSource.sorts = this.dataSource.sorts.filter(t => t.path != this.path);
    }

    this.dataSource.query({
      sorts: this.dataSource.sorts,
      page: 1
    })
  }

}
