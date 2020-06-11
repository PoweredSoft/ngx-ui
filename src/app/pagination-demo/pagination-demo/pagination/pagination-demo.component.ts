import { Component, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { IModelFormCreateEvent } from '@poweredsoft/ngx-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ps-pagination',
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.scss']
})
export class PaginationDemoComponent implements OnInit {
  columns = ['id','name', 'address', 'commands']
  merchantDataSource: IDataSource<IMerchant>;  
  constructor(private  merchantService: MerchantService){
    this.merchantDataSource = this.createDataSource();

  }

  pages:any;

  newMerchant(name: string) {
    this.merchantDataSource.executeCommandByName('addMerchant', {
      name: name
    }).subscribe(
      res => {
        alert('it worked!');
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
