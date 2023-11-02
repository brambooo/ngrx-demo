import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllClients } from '../../clients';

@Component({
  selector: 'app-invoices-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.scss'],
})
export class InvoicesPageComponent {
  private readonly _store = inject(Store);
  readonly allClients$ = this._store.select(selectAllClients);
}
