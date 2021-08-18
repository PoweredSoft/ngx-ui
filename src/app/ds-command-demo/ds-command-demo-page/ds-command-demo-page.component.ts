import { Component, OnInit } from '@angular/core';
import { IDataSource, IDataSourceValidationError } from '@poweredsoft/data';
import { HttpDataSourceService } from '@poweredsoft/ngx-data';
import { of, throwError } from 'rxjs';

interface ContactQuery {
  contactId: number
}

interface Contact {
  id: number;
  firstName: string,
  lastName: string,
  number: string,
  extension: string;
}

interface ChangeContactPhone {
  contactId: number,
  number: string,
  extension: string
}

@Component({
  selector: 'ps-ds-command-demo-page',
  templateUrl: './ds-command-demo-page.component.html',
  styleUrls: ['./ds-command-demo-page.component.scss']
})
export class DsCommandDemoPageComponent implements OnInit {

  private contact: Contact = {
    id: 1,
    firstName: "David",
    lastName: "Lebee",
    extension: null,
    number: "514 448 8444"
  };

  myCommand: ChangeContactPhone = {
    contactId: 1,
    number: null,
    extension: null
  }

  formActivated: boolean = false;
  dataSource: IDataSource<Contact>;

  constructor(private hdss: HttpDataSourceService) {
    this.dataSource = this.hdss.singleBuilder<ContactQuery, Contact, number>()
      .keyResolver(m => m.id)
      .queryHandler(_ => of(this.contact))
      .addCommandByCallback<ChangeContactPhone, ChangeContactPhone>("changePhone", (command) => {

        if (!command.number || command.number.length == 0) {
          return throwError({
            status: 400,
            error: {
              errors: {
                number: ['number is required']
              }
            }
          })
        }

        if (command.extension == "hello")
          return throwError({
            status: 500,
            error: {
              message: "Error from server..."
            }
          })

        return of(command);
      }, e => {
        return of(<ChangeContactPhone>{
          contactId: e.model.id,
          number: e.model.number,
          extension: e.model.extension
        });
      })
      .createDataSource();

  }

  ngOnInit(): void {
    this.dataSource.refresh();
  }

  onSuccess(command: ChangeContactPhone) {
    this.contact.number = command.number;
    this.contact.extension = command.extension;
    this.formActivated = false;
  }

}
