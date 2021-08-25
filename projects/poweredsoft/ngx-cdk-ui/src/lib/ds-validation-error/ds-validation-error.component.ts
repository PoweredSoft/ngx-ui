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
  commandStartedSub: Subscription;
  latestErrors: string[] = [];

  constructor() { }

  ngOnDestroy(): void {
    this.validationErrorsSub?.unsubscribe();
    this.commandStartedSub?.unsubscribe();
  }

  ngOnInit(): void {
    
    this.commandStartedSub = this.dataSource.commandStarted$.subscribe(e => {
      this.latestErrors = [];
    });

    this.validationErrorsSub = this.dataSource.validationError$.subscribe(validationErrors => {
      this.latestErrors = Object.keys(validationErrors.errors)
        .filter(t => t.toLowerCase() == this.field?.toLowerCase())
        .reduce<string[]>((prev, current) => {
          return prev.concat(validationErrors.errors[current]);
        }, []);
    });

  }

}
