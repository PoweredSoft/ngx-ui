import { Injectable } from '@angular/core';
import { GraphQLDataSourceService } from '@poweredsoft/ngx-data-apollo';
import { IDataSource, DataSource } from '@poweredsoft/data';

export interface IMerchant{
  id: string,
  name: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private dataSourceGenericService: GraphQLDataSourceService) {

    dataSourceGenericService
  }

  createMerchantDataSource() : IDataSource<IMerchant> {
    const optionsBuilder = this.dataSourceGenericService.createDataSourceOptionsBuilder<IMerchant, string>(
      'merchants',
      'GraphQLAdvanceQueryOfMerchantInput',
      'id, name, address',
      (model) => model.id,
      {
        page: 1,
        pageSize: 4
      }, 
      true
    );
    const options = optionsBuilder.create();
    return new DataSource<IMerchant>(options);
  }
}
