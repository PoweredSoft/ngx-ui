import { Injectable } from '@angular/core';
import { GraphQLDataSourceService } from '@poweredsoft/ngx-data-apollo';
import { IDataSource, DataSource } from '@poweredsoft/data';
import { Apollo } from 'apollo-angular';
import  gql  from 'graphql-tag';
import { of } from 'rxjs';
import { IChangeMerchantCommand as IChangeMerchantCommand, IAddMerchantCommand, IRemoveMerchantCommand } from './IChangeMerchantCommand';
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
      'id, name, address, ordering, openDate',
      (model) => model.id,
      {
        page: 1,
        pageSize: 15,
      },
      true
    );
   
    builder.addMutation<IChangeMerchantCommand, string>(
      'changeMerchant', //<-- command name
      'changeMerchant', //<-- graph ql mutation name
      
      // implementation of the command.
      command => {
        return this.apollo.use('command').mutate<string>({
          mutation: gql`
            mutation executeChangeName($command: ChangeMerchantCommandInput) {
              changeMerchant(params: $command)
            }
          `,
          variables: {
            command: command,
          },
        });
      },
      
      // viewModel -> transform to the form model for that command -> IChangeMerchantName
      e => of(<IChangeMerchantCommand>{
        id: e.model.id,
        name: e.model.name,
        address: e.model.address,
        ordering:e.model.ordering,
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
        name: 'A New merchant',
        address: '',
        ordering: 11
      })
    );

    builder.addMutation<IRemoveMerchantCommand, string>(
      'removeMerchant', //<-- command name
      'removeMerchant', //<-- graph ql mutation name
      
      // implementation of the command.
      command => {
        
        return this.apollo.use('command').mutate<string>({
          mutation: gql`
            mutation executeAddMerchant($command: RemoveMerchantCommandInput) {
              removeMerchant(params: $command)
            }
          `,
          variables: {
            command: command,
          },
        });
      },
      
      // viewModel -> transform to the form model for that command -> IChangeMerchantName
      e => of(<IRemoveMerchantCommand>{
        id: e.model.id, //should be id?
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
