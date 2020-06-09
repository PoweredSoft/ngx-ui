import { Component, OnInit } from '@angular/core';
import { DataSource, IDataSource, IQueryExecutionResult, IQueryExecutionGroupResult } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';

@Component({
  selector: 'ps-data-grid-demo-home',
  templateUrl: './data-grid-demo-home.component.html',
  styleUrls: ['./data-grid-demo-home.component.scss']
})
export class DataGridDemoHomeComponent implements OnInit {

  title = 'cdkDemo';
  columns = ['id','name', 'address', 'commands']
  merchantDataSource: IDataSource<IMerchant>;  
  constructor(private  merchantService: MerchantService){
    this.merchantDataSource = this.createDataSource();

  }

  


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
    this.merchantDataSource.loading$.subscribe(isLoading => {
      console.log('merchant data source event loading', isLoading);
    });

    this.merchantDataSource.data$.subscribe(receivedData => {
      console.log('new data is coming from the server', receivedData);
    });
    this.merchantDataSource.refresh();
  }
 

  



}
