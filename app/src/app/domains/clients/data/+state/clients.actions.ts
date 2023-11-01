import { createAction, props } from '@ngrx/store';
import { ClientsEntity } from './clients.models';

export const loadClients = createAction('[Clients Page] Loading Clients');

export const loadClientsSuccess = createAction(
  '[Clients/API] Load Clients Success',
  props<{ clients: ClientsEntity[] }>(),
);

export const loadClientsFailure = createAction(
  '[Clients/API] Load Clients Failure',
);

export const addClient = createAction(
  '[Clients/API] Add Client',
  props<{ client: ClientsEntity }>(),
);

export const addClientSuccess = createAction(
  '[Clients/API] Add Client Success',
  props<{ client: ClientsEntity }>(),
);

export const addClientFailure = createAction(
  '[Clients/API] Add Client Failure',
  props<{ client: ClientsEntity }>(),
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
