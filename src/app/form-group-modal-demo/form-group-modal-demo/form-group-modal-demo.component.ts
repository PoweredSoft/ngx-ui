import { Component, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IModelFormCreateEvent } from 'projects/poweredsoft/ngx-bootstrap/src/public-api';

@Component({
  selector: 'ps-form-group-modal-demo',
  templateUrl: './form-group-modal-demo.component.html',
  styleUrls: ['./form-group-modal-demo.component.scss']
})
export class FormGroupModalDemoComponent implements OnInit {
 
  createDataSource(): IDataSource<IMerchant> {
    return this.merchantService.createDataSource();
  }

  
  merchantDataSource: IDataSource<IMerchant>;
  columns = ['id','name', 'address', 'actions'];
  constructor(private merchantService: MerchantService, private fb: FormBuilder) {
    this.merchantDataSource = this.createDataSource();
   }

  ngOnInit(): void {
    this.merchantDataSource.refresh();
  }

  onFormCreate(event: IModelFormCreateEvent) {
    event.shouldSetCommandModel = false;
    event.formGroup = this.fb.group({
      'name': [event.commandModel.name, Validators.required]
    });
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
}
