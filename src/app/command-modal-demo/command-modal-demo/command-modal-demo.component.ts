import { Component, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';

@Component({
  selector: 'ps-command-modal-demo',
  templateUrl: './command-modal-demo.component.html',
  styleUrls: ['./command-modal-demo.component.scss']
})
export class CommandModalDemoComponent implements OnInit {

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
