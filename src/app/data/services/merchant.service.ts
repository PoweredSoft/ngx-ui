import { Injectable } from '@angular/core';
import { GraphQLDataSourceService } from '@poweredsoft/ngx-data-apollo';
import { IDataSource, DataSource } from '@poweredsoft/data';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';
import { of } from 'rxjs';
import { IChangeMerchantNameCommand } from './IChangeMerchantNameCommand';
import { IMerchant } from './IMerchant';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(
    private dataSourceGenericService: GraphQLDataSourceService,
    private apollo: Apollo
  ) {}

  createMerchantDataSource(): IDataSource<IMerchant> {
    const builder = this.dataSourceGenericService.createDataSourceOptionsBuilder<
      IMerchant,
      string
    >(
      'merchants',
      'GraphQLAdvanceQueryOfMerchantInput',
      'id, name, address',
      (model) => model.id,
      {
        page: 1,
        pageSize: 4,
      },
      true
    );

    builder.addMutation<IChangeMerchantNameCommand, string>(
      'changeMerchantName', //<-- command name
      'changeMerchantName', //<-- graph ql mutation name
      
      // implementation of the command.
      command => {
        return this.apollo.use('command').mutate<string>({
          mutation: gql`
            mutation executeChangeName($command: changeMerchantNameInput) {
              changeMerchantName(params: $command)
            }
          `,
          variables: {
            command: command,
          },
        });
      },
      
      // viewModel -> transform to the form model for that command -> IChangeMerchantName
      e => of(<IChangeMerchantNameCommand>{
        merchantId: e.model.id,
        newName: e.model.name,
      })
    );

    const options = builder.create();
    return new DataSource<IMerchant>(options);
  }
}
