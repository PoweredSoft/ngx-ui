import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmModalService } from '@poweredsoft/ngx-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-pagination',
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.scss']
})
export class PaginationDemoComponent implements OnInit, OnDestroy {
  columns = ['id','name', 'address','commands']
  merchantDataSource: IDataSource<IMerchant>;  
  private _dataSubscription: Subscription;
  constructor(private  merchantService: MerchantService, private confirmModalService: ConfirmModalService){
    this.merchantDataSource = this.createDataSource();

  }
  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
  }

  pages:any;
  
  createDataSource(): IDataSource<IMerchant> {
    return this.merchantService.createDataSource();
  }

  ngOnInit() {
    this.merchantDataSource.refresh();
    this.merchantDataSource.data$.subscribe(newData => {     
      if (newData)
        this.pages = new Array(newData.numberOfPages);
    });
  }
  

}
