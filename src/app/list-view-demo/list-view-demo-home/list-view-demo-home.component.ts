import { Component, OnInit } from '@angular/core';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { IDataSource } from '@poweredsoft/data';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-list-view-demo-home',
  templateUrl: './list-view-demo-home.component.html',
  styleUrls: ['./list-view-demo-home.component.scss']
})
export class ListViewDemoHomeComponent implements OnInit {


  merchantDataSource: IDataSource<IMerchant>;


  constructor(private merchantService: MerchantService) {
    this.merchantDataSource = merchantService.createDataSource(); //Assign the dataSource
   }

  ngOnInit(): void {

    this.merchantDataSource.refresh();
  }

}
