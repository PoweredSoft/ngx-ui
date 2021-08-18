import { Component, OnInit } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';
import { HttpDataSourceService } from '@poweredsoft/ngx-data';
import { of } from 'rxjs';

interface OnePersonQuery {
  personId: number
}

interface Person {
  id: number,
  firstName: string,
  lastName: string
}

@Component({
  selector: 'ps-view-demo-page',
  templateUrl: './view-demo-page.component.html',
  styleUrls: ['./view-demo-page.component.scss']
})
export class ViewDemoPageComponent implements OnInit {

  dataSource: IDataSource<Person>;
  dataSource2: IDataSource<Person>;
  constructor(private hdss: HttpDataSourceService) { 
    this.dataSource = this.hdss.singleBuilder<OnePersonQuery, Person, number>()
      .keyResolver(m => m.id)
      .queryUrl('https://localhost:5001/api/query/onePerson')
      .beforeRead(_ => {
        return of({
          personId: 1
        })
      })
      .createDataSource();

      this.dataSource2 = this.hdss.singleBuilder<OnePersonQuery, Person, number>()
      .keyResolver(m => m.id)
      .queryUrl('https://localhost:5001/api/query/onePerson')
      .beforeRead(_ => {
        return of({
          personId: 3
        });
      })
      .createDataSource();
  }

  ngOnInit(): void {
    this.dataSource.refresh();
    this.dataSource2.refresh();
  }

}
