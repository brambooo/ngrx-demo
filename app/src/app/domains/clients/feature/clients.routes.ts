import { Routes } from '@angular/router';
import { ClientsPageComponent } from './clients-page.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromClients from '../data/+state/clients.reducer';
import { ClientsEffects } from '../data/+state/clients.effects';

export const FEATURE_CLIENTS_ROUTES: Routes = [
  {
    path: '',
    component: ClientsPageComponent,
    providers: [
      provideState(fromClients.CLIENTS_FEATURE_KEY, fromClients.clientsReducer),
      provideEffects(ClientsEffects),
    ],
  },
];
