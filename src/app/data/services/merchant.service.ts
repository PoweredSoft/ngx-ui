import { Injectable } from '@angular/core';
import { GraphQLDataSourceService } from '@poweredsoft/ngx-data-apollo';
import { IDataSource, DataSource } from '@poweredsoft/data';
import { Apollo } from 'apollo-angular';
import  gql  from 'graphql-tag';
import { of } from 'rxjs';
import { IChangeMerchantNameCommand, IAddMerchantCommand } from './IChangeMerchantNameCommand';
import { IMerchant } from './IMerchant';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(
    private dataSourceGenericService: GraphQLDataSourceService,
    private apollo: Apollo
  ) {}

  createDataSource(): IDataSource<IMerchant> {
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
        pageSize: 50,
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

    builder.addMutation<IAddMerchantCommand, string>(
      'addMerchant', //<-- command name
      'addMerchant', //<-- graph ql mutation name
      
      // implementation of the command.
      command => {
        
        return this.apollo.use('command').mutate<string>({
          mutation: gql`
            mutation executeAddMerchant($command: AddMerchantCommandInput) {
              addMerchant(params: $command)
            }
          `,
          variables: {
            command: command,
          },
        });
      },
      
      // viewModel -> transform to the form model for that command -> IChangeMerchantName
      e => of(<IAddMerchantCommand>{
        name: '',
        address: ''
      })
    );

    const options = builder.create();
    return new DataSource<IMerchant>(options);
  }

  /*
  createDataSource(): DataSource<IMerchant> {
    const builder = this.dataSourceGenericService.createDataSourceOptionsBuilder<IMerchant, string>(
      'merchants',
      'GraphQLAdvanceQueryOfMerchantInput',
      'id, name, address',
      (model) => model.id,
      {
        page: 1,
        pageSize: 4,
        sorts: [
          {
            path: 'name',
            ascending: true
          }
        ]
      }, 
      true
    );

    return new DataSource<IMerchant>(builder.create());
  }*/
}
