import { Component, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmModalService } from '@poweredsoft/ngx-bootstrap';

@Component({
  selector: 'ps-pagination',
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.scss']
})
export class PaginationDemoComponent implements OnInit {
  columns = ['id','name', 'address']
  merchantDataSource: IDataSource<IMerchant>;  
  constructor(private  merchantService: MerchantService, private confirmModalService: ConfirmModalService){
    this.merchantDataSource = this.createDataSource();

  }

  pages:any;

  testService() {
    this.confirmModalService.confirm({
      message: 'Do you want to delete this merchant?',
      yesText: 'yes delete this merchant',
      yesClass: 'danger',
      noText: 'no please dont',
      noClass: 'light'
    }).subscribe(result => {
      console.log(result);
    })
  }

  removeMerchant(id: string) {    
    this.merchantDataSource.executeCommandByName('removeMerchant', {
      id: id
    }).subscribe(      
      res => {
        alert('removed!');
        this.merchantDataSource.refresh();
      },
      err => {
        console.log(err);
        alert('failed');
      }
    );
  }

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
