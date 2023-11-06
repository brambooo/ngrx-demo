import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, Observable, exhaustMap, map } from 'rxjs';
import * as InvoicesActions from './invoices.actions';
import { InvoiceService } from '../invoice-service';
import { Action } from '@ngrx/store';
import { Invoice } from '../../../shared/models/state';

@Injectable()
export class InvoicesEffects {
  private _actions$ = inject(Actions);
  private _invoiceService = inject(InvoiceService);

  readonly loadClients$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(InvoicesActions.loadInvoices),
        exhaustMap(() =>
          this._invoiceService.getAll().pipe(
            map((invoices: Invoice[]) =>
              InvoicesActions.loadInvoicesSuccess({ invoices }),
            ),
            catchError((error) => {
              console.error('Error', error);
              return of(InvoicesActions.loadInvoicesFailure({ error }));
            }),
          ),
        ),
      ) as Observable<Action>,
  );
}
