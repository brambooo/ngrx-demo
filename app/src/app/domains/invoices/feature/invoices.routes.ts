import { Routes } from '@angular/router';
import { InvoicesPageComponent } from './invoices-page.component';

export const FEATURE_INVOICES_ROUTES: Routes = [
  {
    path: '',
    component: InvoicesPageComponent,
    // providers: [
    //   provideState(fromClients.CLIENTS_FEATURE_KEY, fromClients.clientsReducer),
    //   provideEffects(ClientsEffects),
    // ],
  },
];
