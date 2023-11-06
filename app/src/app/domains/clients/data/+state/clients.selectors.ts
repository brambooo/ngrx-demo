import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CLIENTS_FEATURE_KEY,
  ClientsState,
  clientsAdapter,
} from './clients.reducer';
import { Client } from '../../../shared/models/state/client';

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

export const selectSelectedId = createSelector(
  selectClientsState,
  (state: ClientsState) => state.selectedId,
);

export const selectSelectedClient = createSelector(
  selectAllClients,
  selectSelectedId,
  (clients, selectedId) => {
    if (clients && selectedId) {
      return clients.find(
        (client: Client) => client.id === (selectedId as number),
      );
    }
    return undefined;
  },
);
