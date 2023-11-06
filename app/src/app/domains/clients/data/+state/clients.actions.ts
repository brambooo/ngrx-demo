import { createAction, props } from '@ngrx/store';
import { Client } from '../../../shared/models/state/client';

// API actions
export const loadClients = createAction('[Clients Page] Loading Clients');

export const loadClientsSuccess = createAction(
  '[Clients/API] Load Clients Success',
  props<{ clients: Client[] }>(),
);

export const loadClientsFailure = createAction(
  '[Clients/API] Load Clients Failure',
  props<{ error: any }>(),
);

export const addClient = createAction(
  '[Clients/API] Add Client',
  props<{ client: Client }>(),
);

export const addClientSuccess = createAction(
  '[Clients/API] Add Client Success',
  props<{ client: Client }>(),
);

export const addClientFailure = createAction(
  '[Clients/API] Add Client Failure',
  props<{ client: Client }>(),
);

export const removeClient = createAction(
  '[Clients/API] Remove Client',
  props<{ clientId: number }>(),
);

export const removeClientSuccess = createAction(
  '[Clients/API] Remove Client Success',
  props<{ clientId: number }>(),
);

export const removeClientFailure = createAction(
  '[Clients/API] Remove Client Failure',
  props<{ clientId: number }>(),
);

// Data actions
export const selectClient = createAction(
  '[Clients] Select Client',
  props<{ clientId: number }>(),
);

export const clearSelectedClient = createAction(
  '[Clients] Clear Selected Client',
  props<{ clientId: number }>(),
);
