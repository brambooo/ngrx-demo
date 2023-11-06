import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as InvoicesActions from './invoices.actions';
import { Invoice, StateStatus } from '../../../shared/models/state';

export const INVOICES_FEATURE_KEY = 'invoices';

export interface InvoicesState extends EntityState<Invoice> {
  selectedId?: string | number; // which Invoices record has been selected
  clients: Invoice[];
  status: StateStatus;
  notification?: string | null; // last known error (if any)
}

export interface InvoicesPartialState {
  readonly [INVOICES_FEATURE_KEY]: InvoicesState;
}

export const invoicesAdapter: EntityAdapter<Invoice> =
  createEntityAdapter<Invoice>();

export const initialInvoicesState: InvoicesState =
  invoicesAdapter.getInitialState({
    // set initial required properties
    clients: [],
    status: 'pending',
    loaded: false,
    error: null,
  });

const reducer = createReducer(
  initialInvoicesState,
  on(InvoicesActions.loadInvoices, (state) => ({
    ...state,
    status: 'loading' as StateStatus,
  })),
  on(InvoicesActions.loadInvoicesSuccess, (state, { invoices }) =>
    invoicesAdapter.setAll(invoices, {
      ...state,
      error: null,
      status: 'success' as StateStatus,
    }),
  ),
  on(InvoicesActions.loadInvoicesFailure, (state, { error }) => ({
    ...state,
    status: 'error' as StateStatus,
    error,
  })),
);

export function invoicesReducer(
  state: InvoicesState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
