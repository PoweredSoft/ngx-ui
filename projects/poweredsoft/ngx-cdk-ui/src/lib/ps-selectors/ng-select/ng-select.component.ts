import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IDataSource, ISimpleFilter } from '@poweredsoft/data';
import { Observable, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'ps-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss']
})
export class NgSelectComponent implements OnInit, OnDestroy {

  @Input() dataSource: IDataSource<any>;
  @Input() searchPath: string;
  @Input() searchType: string = "Contains";
  @Input() sortingPath: string;
  @Input() disableServer:boolean = false;

  @Input() bindLabel:string;


  data$ : Observable<any[]>;
  selectedId:any;
  isLoading:boolean = false;
  searchInput$ = new Subject<string>();

  private _dataSubscription: Subscription;  

  constructor(private cdr: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataFetching();    
    this.detectLoading();
    if(!this.disableServer){
      this.searchOnServer();
    }else{
      this.refreshDataSource();
    }
  }


  dataFetching(){
    this.data$ = this.dataSource.data$.pipe(
      map(t => {
        if (t == null)        
          return [];
        return t.data;
      })
    );
    this._dataSubscription = this.dataSource.data$.subscribe();
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
    ).subscribe(searchTerm => this.refreshDataSource(searchTerm, 1, 50)); // page: 1, pageSize: 50

    this.refreshDataSource(); //send the query to server to sorting & filtering by default
  }

  refreshDataSource(searchTerm:any = null, page:number=null, pageSize:number=null){
    let searchfilters:ISimpleFilter[] = null;
    if(searchTerm){
      searchfilters = [<ISimpleFilter>{
        path: this.searchPath,      
        type: this.searchType, // Default: Contains
        value: searchTerm
      }]
    }
    this.dataSource.query({
      page: page,
      pageSize: pageSize,
      filters:searchfilters,
      sorts:[
        {path: this.sortingPath, ascending: true} 
      ]
    })
  }

}
