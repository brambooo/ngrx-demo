import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, map, Observable, exhaustMap, mergeMap } from 'rxjs';
import * as ClientsActions from './clients.actions';
import { ClientService } from '../client-service';
import { ClientsEntity } from './clients.models';
import { Action } from '@ngrx/store';

@Injectable()
export class ClientsEffects {
  // TODO: Uitzoeken waarom het via inject niet werkt?
  // private readonly _clientService = Inject(ClientService);
  private _actions$ = inject(Actions);

  constructor(private readonly _clientService: ClientService) {}

  readonly loadClients$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          ClientsActions.loadClients,
          ClientsActions.addClientSuccess,
          ClientsActions.removeClientSuccess,
        ),
        exhaustMap(() =>
          this._clientService.getAll().pipe(
            map((clients: ClientsEntity[]) =>
              ClientsActions.loadClientsSuccess({ clients }),
            ),
            catchError((error) => {
              console.error('Error', error);
              return of(ClientsActions.loadClientsFailure({ error }));
            }),
          ),
        ),
      ) as Observable<Action>,
  );

  // This effect is fired when addClient or removeClient action is dispatched.
  readonly addClient$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(ClientsActions.addClient),
        // TODO: Onderzoeken welke Rxjs operator nu het beste is in dit geval.
        mergeMap(({ client }) =>
          this._clientService.addClient(client).pipe(
            map(() => ClientsActions.addClientSuccess({ client })),
            catchError(() => of(ClientsActions.addClientFailure({ client }))),
          ),
        ),
      ) as Observable<Action>,
  );

  readonly removeClient$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(ClientsActions.removeClient),
        // TODO: Onderzoeken welke Rxjs operator nu het beste is in dit geval.
        mergeMap(({ clientId }) =>
          this._clientService.removeClient(clientId).pipe(
            map(() => ClientsActions.removeClientSuccess({ clientId })),
            catchError(() =>
              of(ClientsActions.removeClientFailure({ clientId })),
            ),
          ),
        ),
      ) as Observable<Action>,
  );
}
