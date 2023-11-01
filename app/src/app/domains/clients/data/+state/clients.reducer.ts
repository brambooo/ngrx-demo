import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ClientsActions from './clients.actions';
import { ClientsEntity } from './clients.models';

export const CLIENTS_FEATURE_KEY = 'clients';

export type StateStatus = 'pending' | 'loading' | 'error' | 'success';

// Waarom extends gebruiken (generated via nx nu)
export interface ClientsState extends EntityState<ClientsEntity> {
  selectedId?: string | number; // which Clients record has been selected
  clients: ClientsEntity[];
  // loaded: boolean; // has the Clients list been loaded
  status: StateStatus;
  notification?: string | null; // last known error (if any)
}

export interface ClientsPartialState {
  readonly [CLIENTS_FEATURE_KEY]: ClientsState;
}

export const clientsAdapter: EntityAdapter<ClientsEntity> =
  createEntityAdapter<ClientsEntity>();

export const initialClientsState: ClientsState = clientsAdapter.getInitialState(
  {
    // set initial required properties
    clients: [],
    status: 'pending',
    loaded: false,
    error: null,
  },
);

// Note: all reducers must follow the pure function concept (immutable data concept).
// How can we do this?
// We use the spread operator to make a copy of the state and modify it with the new state and return the new state.

// We duplicate the existing state, modify it and return the new state.
const reducer = createReducer(
  // Supply initial state
  initialClientsState,
  // Trigger loading the clients
  on(ClientsActions.loadClients, (state) => ({
    ...state,
    status: 'loading' as StateStatus,
  })),
  // Handle successfully loaded clients
  on(ClientsActions.loadClientsSuccess, (state, { clients }) =>
    clientsAdapter.setAll(clients, {
      ...state,
      error: null,
      status: 'success' as StateStatus,
    }),
  ),
  // Handle clients load failure
  on(ClientsActions.loadClientsFailure, (state, { error }) => ({
    ...state,
    status: 'error' as StateStatus,
    error,
  })),
  // Add the new client to the clients array
  on(ClientsActions.addClient, (state, { client }) => ({
    ...state,
    status: 'loading' as StateStatus,
    notification: null,
  })),
  on(ClientsActions.addClientSuccess, (state, { client }) => ({
    ...state,
    status: 'success' as StateStatus,
    notification: 'Klant succesvol toegevoegd.',
    clients: [...state.clients, client],
  })),
  on(ClientsActions.addClientFailure, (state, { client }) => ({
    ...state,
    status: 'error' as StateStatus,
    notification: 'Fout bij het toevoegen van een klant.',
  })),
  // Remove the client from the clients list
  on(ClientsActions.removeClient, (state, { clientId }) => ({
    ...state,
    status: 'loading' as StateStatus,
    notification: null,
  })),
  on(ClientsActions.removeClientSuccess, (state, { clientId }) => ({
    ...state,
    status: 'success' as StateStatus,
    notification: 'Klant succesvol verwijderd.',
    clients: state.clients.filter((client) => client.id === clientId),
  })),
  on(ClientsActions.removeClientFailure, (state, { clientId }) => ({
    ...state,
    status: 'error' as StateStatus,
    notification: 'Fout bij het verwijderen van een klant',
  })),
);

export function clientsReducer(
  state: ClientsState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
