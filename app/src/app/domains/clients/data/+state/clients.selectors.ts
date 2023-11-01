import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CLIENTS_FEATURE_KEY,
  ClientsState,
  clientsAdapter,
} from './clients.reducer';

// Lookup the 'Clients' feature state managed by NgRx
export const selectClientsState =
  createFeatureSelector<ClientsState>(CLIENTS_FEATURE_KEY);

const { selectAll } = clientsAdapter.getSelectors();

export const selectAllClients = createSelector(
  selectClientsState,
  (state: ClientsState) => selectAll(state),
);

export const selectAllClientsStatus = createSelector(
  selectClientsState,
  (state) => state.status,
);

export const selectAllClientsNotification = createSelector(
  selectClientsState,
  (state) => state.notification,
);
