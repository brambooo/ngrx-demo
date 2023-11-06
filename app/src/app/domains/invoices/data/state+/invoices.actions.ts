import { createAction, props } from '@ngrx/store';
import { Invoice } from '../../../shared/models/state';

export const loadInvoices = createAction('[Invoices Page] Loading Invoices');

export const loadInvoicesSuccess = createAction(
  '[Invoices/API] Load Invoices Success',
  props<{ invoices: Invoice[] }>(),
);

export const loadInvoicesFailure = createAction(
  '[Invoices/API] Load Invoices Failure',
  props<{ error: any }>(),
);

export const addInvoice = createAction(
  '[Invoices/API] Add Invoice',
  props<{ client: Invoice }>(),
);

export const addInvoiceSuccess = createAction(
  '[Invoices/API] Add Invoice Success',
  props<{ client: Invoice }>(),
);

export const addInvoiceFailure = createAction(
  '[Invoices/API] Add Invoice Failure',
  props<{ client: Invoice }>(),
);

// export const removeInvoice = createAction(
//   '[Invoices/API] Remove Invoice',
//   props<{ clientId: number }>(),
// );

// export const removeInvoiceSuccess = createAction(
//   '[Invoices/API] Remove Invoice Success',
//   props<{ clientId: number }>(),
// );

// export const removeInvoiceFailure = createAction(
//   '[Invoices/API] Remove Invoice Failure',
//   props<{ clientId: number }>(),
// );
