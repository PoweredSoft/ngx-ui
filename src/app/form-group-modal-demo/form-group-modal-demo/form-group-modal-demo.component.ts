import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IModelFormCreateEvent } from 'projects/poweredsoft/ngx-bootstrap/src/public-api';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ps-form-group-modal-demo',
  templateUrl: './form-group-modal-demo.component.html',
  styleUrls: ['./form-group-modal-demo.component.scss']
})
export class FormGroupModalDemoComponent implements OnInit,OnDestroy {
 
  createDataSource(): IDataSource<IMerchant> {
    return this.merchantService.createDataSource();
  }

  pages:any;
  merchantDataSource: IDataSource<IMerchant>;
  private _dataSubscription: Subscription;
  columns = ['id','name', 'address', 'actions'];
  constructor(private merchantService: MerchantService, private fb: FormBuilder) {
    this.merchantDataSource = this.createDataSource();
   }
  ngOnDestroy(): void {
    this._dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.merchantDataSource.refresh();
    this._dataSubscription = this.merchantDataSource.data$.subscribe(newData => {     
      if (newData)
        this.pages = new Array(newData.numberOfPages);
    });
  }

  onFormCreate(event: IModelFormCreateEvent) {    
    event.shouldSetCommandModel = false;
    event.formGroup = this.fb.group({
      'name': [event.commandModel.name, Validators.required],
      'address': [event.commandModel.address, Validators.required]
    });
  }



}
