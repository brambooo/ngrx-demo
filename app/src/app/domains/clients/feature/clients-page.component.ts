import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  loadClients,
  selectAllClients,
  removeClient,
  addClient,
  selectAllClientsStatus,
  selectAllClientsNotification,
} from '../data';
import { ClientsEntity } from '../data/+state/clients.models';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss'],
})
export class ClientsPageComponent implements OnInit {
  private readonly _store = inject(Store);
  readonly allClients$ = this._store.select(selectAllClients);
  readonly allClientsStatus$ = this._store.select(selectAllClientsStatus);
  readonly allClientsNotification$ = this._store.select(
    selectAllClientsNotification,
  );

  ngOnInit(): void {
    this._store.dispatch(loadClients());
  }

  addClient(): void {
    console.log('Add client called!');
    const random = Math.floor(Math.random() * 1000);
    const name = 'Random_' + random;
    const email = 'email_' + random;

    const client: ClientsEntity = { name, email };
    this._store.dispatch(addClient({ client }));
  }

  removeClient(clientId: number): void {
    console.log('removeClient', clientId);

    this._store.dispatch(removeClient({ clientId }));
  }
}
