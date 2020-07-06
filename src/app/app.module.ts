import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function app_Init(apollo: Apollo, httpLink: HttpLink) {
  return async () => {
    const defaultOptions: DefaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    };

    apollo.createDefault({
      link: httpLink.create({ uri: 'https://localhost:5001' }),
      cache: new InMemoryCache(),
      defaultOptions: defaultOptions,
    });

    apollo.createNamed('command', {
      link: httpLink.create({ uri: 'https://localhost:6001' }),
      cache: new InMemoryCache(),
      defaultOptions: defaultOptions,
    });

    return new Promise((resolve, reject) => {
      resolve();
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //SelectLabelTemplateDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: app_Init,
      deps: [Apollo, HttpLink],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
