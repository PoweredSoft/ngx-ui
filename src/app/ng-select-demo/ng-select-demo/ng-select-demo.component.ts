import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MerchantService } from 'src/app/data/services/merchant.service';

import { IMerchant } from 'src/app/data/services/IMerchant';
import { Observable, Subject } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { IDataSource, ISimpleFilter } from '@poweredsoft/data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ps-ng-select-demo',
  templateUrl: './ng-select-demo.component.html',
  styleUrls: ['./ng-select-demo.component.scss']
})
export class NgSelectDemoComponent implements OnInit {

  merchantDataSource: IDataSource<IMerchant>;
  merchantDataSource2: IDataSource<IMerchant>; 
  merchantDataSource3: IDataSource<IMerchant>; 
  merchantDataSource4: IDataSource<IMerchant>;   
  
  selectedValue: IMerchant;

  myForm: FormGroup;
  myValue: string;
  myValue2: string;
  myValue3: string;
  myValue4: string;

  constructor(private merchantService: MerchantService, private fb: FormBuilder
              ) {
    this.merchantDataSource = merchantService.createDataSource(); //Assign the dataSource
    this.merchantDataSource2 = merchantService.createDataSource(); 
    this.merchantDataSource3 = merchantService.createDataSource(); 
    this.merchantDataSource4 = merchantService.createDataSource(); 
    this.myForm = fb.group({
      'merchantId': [null, null]
    })
  }

  ngOnInit(): void {
    
  }

  

}
