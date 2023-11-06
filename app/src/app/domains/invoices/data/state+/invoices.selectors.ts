import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  INVOICES_FEATURE_KEY,
  InvoicesState,
  invoicesAdapter,
} from './invoices.reducer';

// Lookup the 'Invoices' feature state managed by NgRx
export const selectInvoicesState =
  createFeatureSelector<InvoicesState>(INVOICES_FEATURE_KEY);

const { selectAll } = invoicesAdapter.getSelectors();

export const selectInvoices = createSelector(
  selectInvoicesState,
  (state: InvoicesState) => selectAll(state),
);

export const selectInvoicesStatus = createSelector(
  selectInvoicesState,
  (state) => state.status,
);

export const selectInvoicesNotification = createSelector(
  selectInvoicesState,
  (state) => state.notification,
);

// export const selectSelectedId = createSelector(
//   selectInvoicesState,
//   (state: InvoicesState) => state.selectedId
// );

// export const selectEntity = createSelector(
//   selectInvoicesEntities,
//   selectSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );
