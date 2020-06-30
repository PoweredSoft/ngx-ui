import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { IDataSource, ISimpleFilter } from '@poweredsoft/data';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'ps-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss']
})
export class NgSelectComponent implements OnInit {

  @Input() dataSource: IDataSource<any>;

  data$ : Observable<any[]>;
  selectedId:any;
  isLoading:boolean = false;
  searchInput$ = new Subject<string>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataFetching();    
    this.detectLoading();
    this.searchOnServer();
  }


  dataFetching(){
    this.data$ = this.dataSource.data$.pipe(
      map(t => {
        if (t == null)        
          return [];
        return t.data;
      })
    );
  }

  detectLoading(){
    this.dataSource.loading$.subscribe(loading => {      
      this.isLoading = loading;
      this.cdr.detectChanges();
    });
  }

  searchOnServer(){
    this.searchInput$.pipe(
      distinctUntilChanged(), // emit the difference from previous input
      debounceTime(500)  // this is for delaying searching speed
    ).subscribe(searchTerm => this.refreshDataSource(searchTerm));

    this.refreshDataSource(); //send the query to server to sorting & filtering by default
  }

  refreshDataSource(searchTerm:any = null){
    let searchfilters:ISimpleFilter[] = null;
    if(searchTerm){
      searchfilters = [<ISimpleFilter>{
        path: 'name',      //Todo: add input variable for this filtering path
        type: 'startsWith',//Todo: add input variable for this type, could be contains, startsWith, endswith, equal
        value: searchTerm
      }]
    }
    this.dataSource.query({
      page: 1,
      pageSize: 50,
      filters:searchfilters,
      sorts:[
        {path: 'name', ascending: true} //Todo: add input variable for sorting path
      ]
    })
  }

}
