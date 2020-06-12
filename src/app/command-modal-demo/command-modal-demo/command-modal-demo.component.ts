import { Component, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ps-command-modal-demo',
  templateUrl: './command-modal-demo.component.html',
  styleUrls: ['./command-modal-demo.component.scss']
})
export class CommandModalDemoComponent implements OnInit {

  columns = ['id','name', 'address', 'commands'];
  pages:any;
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
    this.merchantDataSource.refresh();
    this.merchantDataSource.data$.subscribe(newData => {     
      if (newData)
        this.pages = new Array(newData.numberOfPages);
    });
  }

  message: string;
  modalRef: BsModalRef;
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

}
