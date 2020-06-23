import { Component, OnInit, Input } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';

@Component({
  selector: 'psbx-grid-sorting',
  templateUrl: './grid-sorting.component.html',
  styleUrls: ['./grid-sorting.component.scss']
})
export class GridSortingComponent implements OnInit {

  @Input() dataSource : IDataSource<any>;
  @Input() path:string;  
  isAscending:boolean;
  isDescending:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  ascending(){
    this.isAscending = true;
    console.log("ascending result...")
    const existingSort = this.dataSource.sorts.find(t => t.path == this.path);
    if (existingSort){
      existingSort.ascending = true;
    }else{
      this.dataSource.sorts.push({
        path: this.path,
        ascending:true        
      })
    }

    this.dataSource.query({
      sorts: this.dataSource.sorts,
      page: 1
    })
    this.isDescending = false;
  }

  descending(){
    this.isDescending = true;
    console.log("descending result...")
    const existingSort = this.dataSource.sorts.find(t => t.path == this.path);
    if (existingSort){
      existingSort.ascending = false;
    }else{
      this.dataSource.sorts.push({
        path: this.path,
        ascending:false        
      })
    }

    this.dataSource.query({
      sorts: this.dataSource.sorts,
      page: 1
    })
    this.isAscending = false;
  }

}
