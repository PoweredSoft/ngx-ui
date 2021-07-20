import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-ds-validation-error',
  templateUrl: './ds-validation-error.component.html',
  styleUrls: ['./ds-validation-error.component.scss']
})
export class DsValidationErrorComponent implements OnInit, OnDestroy {

  @Input() dataSource: IDataSource<any>;
  @Input() field: string;
  validationErrorsSub: Subscription;
  latestErrors: string[] = [];

  constructor() { }

  ngOnDestroy(): void {
    this.validationErrorsSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.validationErrorsSub = this.dataSource.validationError$.subscribe(validationErrors => {
      this.latestErrors = Object.keys(validationErrors.errors)
        .filter(t => t.toLowerCase() == this.field?.toLowerCase())
        .reduce<string[]>((prev, current) => {
          return prev.concat(validationErrors.errors[current]);
        }, []);
    });

  }

}
