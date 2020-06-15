import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'psbx-ds-pagination',
  templateUrl: './data-source-pagination.component.html',
  styleUrls: ['./data-source-pagination.component.scss']
})
export class DataSourcePaginationComponent implements OnInit, OnDestroy {
  

  @Input() dataSource: IDataSource<any>
  numberOfItems: number = 0;
  private dataSubscription: Subscription;

  constructor(private cdf: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  get pageSize() {
    return this.dataSource.pageSize;
  }

  ngOnInit(): void {
    this.dataSubscription = this.dataSource.data$.subscribe(latest => {
      if (latest)
        this.numberOfItems = latest.totalRecords;
      else
        this.numberOfItems = 0;
    });
  }

}
