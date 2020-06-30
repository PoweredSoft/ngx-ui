import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MerchantService } from 'src/app/data/services/merchant.service';

import { IMerchant } from 'src/app/data/services/IMerchant';
import { Observable, Subject } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { IDataSource, ISimpleFilter } from '@poweredsoft/data';

@Component({
  selector: 'ps-ng-select-demo',
  templateUrl: './ng-select-demo.component.html',
  styleUrls: ['./ng-select-demo.component.scss']
})
export class NgSelectDemoComponent implements OnInit {

  merchantDataSource: IDataSource<IMerchant>;  
  

  constructor(private merchantService: MerchantService,
              ) {
    this.merchantDataSource = merchantService.createDataSource(); //Assign the dataSource
  }

  ngOnInit(): void {
    
  }

  

}
