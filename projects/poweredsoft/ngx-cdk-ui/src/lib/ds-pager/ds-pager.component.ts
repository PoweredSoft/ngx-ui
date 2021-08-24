import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IDataSource, IQueryExecutionGroupResult, IQueryExecutionResult } from '@poweredsoft/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-ds-pager',
  templateUrl: './ds-pager.component.html',
  styleUrls: ['./ds-pager.component.scss']
})
export class DsPagerComponent implements OnInit, OnDestroy {

  private _range: number = 5;

  @Input() dataSource: IDataSource<any>;
  pageRanges: number[] = [];

  // range.
  @Input() set range(value: number) {
    this._range = value;
  }
  get range() {
    return this._range;
  }

  // page.
  @Input() set page(value: number) {
    if (this.dataSource.page != value) {
      this.dataSource.page = value;
      this.pageChange.emit(value);
    }
  }
  get page() {
    return this.dataSource?.page;
  }

  @Output() pageChange = new EventEmitter<number>();

  public latestResult: IQueryExecutionResult<any> & IQueryExecutionGroupResult<any> = null;
  private dataSubscription: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    this.dataSubscription = this.dataSource.data$.subscribe(result => {
      this.latestResult = result;
      this.refreshPageRange();
    });
  }

  refreshPageRange() {
    let previous = [];
    let nexts = [];
    for (let i = 0; i < this.range; i++) {
      const currentPrevious = this.dataSource.page - 1 - i;
      if (currentPrevious >= 1)
        previous.push(currentPrevious);

      const currentNext = this.dataSource.page + i + 1;
      if (currentNext <= this.latestResult?.numberOfPages)
        nexts.push(currentNext);
    }

    previous.reverse();

    const final = previous.concat([this.dataSource.page]).concat(nexts);
    this.pageRanges = final;
  }

  first() {
    this.page = 1;
  }

  last() {
    if (this.latestResult)
      this.page = this.latestResult!.numberOfPages;
  }

  next() {
    if (this.page + 1 <= this.latestResult?.totalRecords)
      this.page++;
  }

  previous() {
    if (this.page > 1)
      this.page--;
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe();
  }
}
