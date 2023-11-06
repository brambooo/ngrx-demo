import { Routes } from '@angular/router';
import { InvoicesPageComponent } from './invoices-page.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromInvoices from './../data/state+/invoices.reducer';
import { InvoicesEffects } from './../data/state+/invoices.effects';
import { AddInvoicePageComponent } from './add-invoice-page/add-invoice-page.component';

export const FEATURE_INVOICES_ROUTES: Routes = [
  {
    path: '',
    component: InvoicesPageComponent,
    // TODO: Not sure this is the correct way to provide state and effects
    providers: [
      provideState(
        fromInvoices.INVOICES_FEATURE_KEY,
        fromInvoices.invoicesReducer,
      ),
      provideEffects(InvoicesEffects),
    ],
  },
  {
    path: 'toevoegen',
    component: AddInvoicePageComponent,
  },
];
