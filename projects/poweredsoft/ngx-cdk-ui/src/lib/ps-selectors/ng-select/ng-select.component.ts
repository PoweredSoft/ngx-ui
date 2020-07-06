import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy, ContentChild, QueryList, ContentChildren, ViewChild, forwardRef, EventEmitter, Output } from '@angular/core';
import { IDataSource, ISimpleFilter } from '@poweredsoft/data';
import { Observable, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { SelectOptionTemplateDirective } from '../select-option-template.directive';
import { NgSelectComponent as SelectComponent } from '@ng-select/ng-select';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ps-ng-select',
  templateUrl: './ng-select.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgSelectComponent),
    multi: true
}],
  styleUrls: ['./ng-select.component.scss']
})
export class NgSelectComponent implements OnInit, OnDestroy, ControlValueAccessor  {

  @ContentChild(SelectOptionTemplateDirective) selectTemplate: SelectOptionTemplateDirective;
  @ViewChild(SelectComponent, { static: true }) selectComponent: SelectComponent;
  @Input() dataSource: IDataSource<any>;
  @Input() searchPath: string;
  @Input() searchType: string;
  @Input() sortingPath: string;
  @Input() serverFiltering:boolean;
  @Input() bindLabel:string;
  @Input() bindValue: string;

  @Output('change') changeEvent = new EventEmitter();

  trackFn: (item: any) => any;
  data$ : Observable<any[]>;
  isLoading:boolean = false;
  searchInput$ = new Subject<string>();

  private _loadingSubscription: Subscription;  

  constructor(private cdr: ChangeDetectorRef) {    
    this.trackFn = this.trackBy.bind(this);
  
  }
 
  valueChanged(event) {
    this.changeEvent.emit(event);
  }

  writeValue(obj: any): void {
    this.selectComponent.writeValue(obj);
  }
  registerOnChange(fn: any): void {
    this.selectComponent.registerOnChange(fn);
  }
  registerOnTouched(fn: any): void {
    this.selectComponent.registerOnTouched(fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    if (this.selectComponent.setDisabledState)
      this.selectComponent.setDisabledState(isDisabled);
  }

  trackBy(item: any) {
    return this.dataSource.resolveIdField(item);
  }

  ngOnDestroy(): void {
    this._loadingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataFetching();    
    this.detectLoading();

    console.log(this.serverFiltering);

    if(this.serverFiltering){
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
  }

  detectLoading(){
    this._loadingSubscription = this.dataSource.loading$.subscribe(loading => {      
      this.isLoading = loading;
      this.cdr.detectChanges();
    });
  }

  searchOnServer(){
    this.searchInput$.pipe(
      distinctUntilChanged(), // emit the difference from previous input
      debounceTime(500)  // this is for delaying searching speed
    ).subscribe(searchTerm => this.refreshDataSource(searchTerm, 1, 100)); // page: 1, pageSize: 50

    this.refreshDataSource(); //send the query to server to sorting & filtering by default
  }

  get selectedModel() {
    return this.selectComponent.hasValue ? this.selectComponent.selectedItems[0].value : null;
  }

  refreshDataSource(searchTerm:any = null, page:number = null, pageSize:number = null){
    let searchfilters:ISimpleFilter[] = null;
    if(searchTerm){
      searchfilters = [<ISimpleFilter>{
        path: this.searchPath || this.bindLabel,      
        type: this.searchType || 'Contains', // Default: Contains
        value: searchTerm
      }]
    }
    this.dataSource.query({
      page: page,
      pageSize: pageSize,
      filters:searchfilters,
      sorts:[
        {path: this.sortingPath || this.bindLabel, ascending: true} 
      ]
    })
  }

  get hasOptionTemplate() {    
    return this.selectTemplate ? true : false;
  }

  get selectOptionTemplate(){
    if (this.selectTemplate)    
      return this.selectTemplate.template;
    return null;
  }

}
