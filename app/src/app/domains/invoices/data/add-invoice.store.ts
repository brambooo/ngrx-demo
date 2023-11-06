import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Client } from '../../shared/models/state/client';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../clients';
import { Invoice, StateStatus } from '../../shared/models/state';
import { InvoiceService } from './invoice-service';
import { Observable, concatMap, tap } from 'rxjs';

export interface AddInvoiceState {
  selectedClient: Client | null;
  userInvoiceInfo?: string;
  // Move below to form:
  // title: string;
  // price: number;
  // from: string;
  // to: string;
  status: StateStatus;
  notifcation: string;
}

@Injectable()
export class AddInvoiceStore extends ComponentStore<AddInvoiceState> {
  private readonly _globalStore = inject(Store);
  private readonly _invoiceService = inject(InvoiceService);

  readonly clients$ = this._globalStore.select(selectAllClients);
  readonly status$ = this.select((state) => state.status);
  readonly selectedClient$ = this.select((state) => state.selectedClient);
  readonly notifcation$ = this.select((state) => state.notifcation);

  constructor() {
    super({
      selectedClient: null,
      // price: 0,
      // title: '',
      // to: '',
      // from: '',
      status: 'pending',
      notifcation: '',
    });
  }

  /**
   * Load all the required data.
   * TODO: Uitzoeken hoe ik maar 1x clients ophaal (dus zowel voor klanten en deze pagina.)
   */
  load(): void {
    this._globalStore.select(loadClients);
  }

  selectClient(client: Client): void {
    // const client = this._globalStore.select(selectSelectedClient);

    this.setState((state) => ({ ...state, client }));
  }

  updateStatus(status: StateStatus): void {
    this.patchState({ status });
  }

  updateNotification(notifcation: string): void {
    this.patchState({ notifcation });
  }

  // readonly getMovie = this.effect((movieId$: Observable<string>) => {
  //   return movieId$.pipe(
  //     // 👇 Handle race condition with the proper choice of the flattening operator.
  //     switchMap((id) => this.moviesService.fetchMovie(id).pipe(
  //       //👇 Act on the result within inner pipe.
  //       tap({
  //         next: (movie) => this.addMovie(movie),
  //         error: (e) => this.logError(e),
  //       }),
  //       // 👇 Handle potential error within inner pipe.
  //       catchError(() => EMPTY),
  //     )),
  //   );
  // });

  // Example delete on list of invoices
  // deleteInvoice = this.updater((state, invoiceId: number) =>
  // ({ ...state, invoices: state.invoices.filter((invoice) => invoice.id !== invoiceId) })

  readonly saveInvoice = this.effect((invoice$: Observable<Invoice>) => {
    return invoice$.pipe(
      tap({
        next: () => {
          console.log('before save');
          this.updateStatus('loading');
          this.updateNotification('');
        },
      }),
      // Bepalen middels de observable stream operator hoe we de race conditions willen verwerken.
      concatMap((invoice) =>
        this._invoiceService.add(invoice).pipe(
          tapResponse(
            () => {
              this.setState({
                selectedClient: null,
                status: 'success',
                notifcation: 'Factuur succesvol toegevoegd.',
              });
            },
            (error) =>
              this.setState({
                selectedClient: null,
                status: 'error',
                notifcation: 'Er is iets fout gegaan.',
              }),
          ),
          // tap({
          //   next: () => {
          //     console.log('success');
          //     this.updateStatus('success');
          //     this.updateNotification('Factuur succesvol toegevoegd.');
          //   },
          //   error: () => {
          //     console.log('error');
          //     this.updateStatus('error');
          //     this.updateNotification('Er is iets fout gegaan');
          //   },
          // }),
          // 👇 Handle potential error within inner pipe.
          // catchError(() => EMPTY),
        ),
      ),
    );
  });
}
