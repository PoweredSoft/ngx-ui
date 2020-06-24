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
  isSorting: boolean =false; 
  isAscending:boolean = false;  
  constructor() { }

  ngOnInit(): void {
  }

  ascending(){
    this.isSorting = !this.isSorting;
    this.isAscending = !this.isAscending;
    console.log("ascending result...")
    const existingSort = this.dataSource.sorts.find(t => t.path == this.path);
    if (existingSort){
      existingSort.ascending = (this.isAscending)? true : false;
    }else{
      this.dataSource.sorts.push({
        path: this.path,
        ascending: (this.isAscending)? true : false 
      })
    }
    this.dataSource.query({
      sorts: this.dataSource.sorts,
      page: 1
    })
  }

}
