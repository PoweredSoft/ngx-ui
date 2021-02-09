import { Component, OnInit } from '@angular/core';
import { IMerchant } from 'src/app/data/services/IMerchant';
import { IDataSource } from '@poweredsoft/data';
import { MerchantService } from 'src/app/data/services/merchant.service';
import { Subscription } from 'rxjs';
import { HttpDataSourceService } from '@poweredsoft/ngx-data';
import { IModelFormCreateEvent } from '@poweredsoft/ngx-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';


interface ISchool {
  id: string,
  name: string
}

@Component({
  selector: 'ps-list-view-demo-home',
  templateUrl: './list-view-demo-home.component.html',
  styleUrls: ['./list-view-demo-home.component.scss']
})
export class ListViewDemoHomeComponent implements OnInit {


  merchantDataSource: IDataSource<ISchool>;


  constructor(merchantService: MerchantService, private fb: FormBuilder) {
    // this.dataSource = hdss.builder<ISchool, string>()
    //   .defaultCriteria({
    //     page: 1,
    //     pageSize: 6
    //   })
    //   .queryUrl('https://localhost:5001/api/query/schools')
    //   .keyResolver(m => m.id)
    //   .createDataSource();

    this.merchantDataSource = merchantService.createDataSource(); //Assign the dataSource
   }

  ngOnInit(): void {

    this.merchantDataSource.query({
      pageSize: 6
    })
  }

  onFormCreate(event: IModelFormCreateEvent) {    
    event.shouldSetCommandModel = false;
    event.formGroup = this.fb.group({
      'name': [event.commandModel.name, Validators.required],
      'address': [event.commandModel.address, Validators.required]
    });
  }
}
