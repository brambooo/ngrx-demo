import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDropdownComponent } from './ui/client-dropdown.component';
import { AddInvoiceStore } from '../../data/add-invoice.store';
import { Client } from '../../../shared/models/state/client';
import { Invoice } from '../../../shared/models/state';

@Component({
  selector: 'app-add-invoice-page',
  standalone: true,
  imports: [CommonModule, ClientDropdownComponent],
  templateUrl: './add-invoice-page.component.html',
  styleUrls: ['./add-invoice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AddInvoiceStore],
})
export class AddInvoicePageComponent implements OnInit {
  private readonly _addInvoiceStore = inject(AddInvoiceStore);
  readonly clients$ = this._addInvoiceStore.clients$;
  readonly status$ = this._addInvoiceStore.status$;
  readonly selectedClient$ = this._addInvoiceStore.selectedClient$;
  readonly notification$ = this._addInvoiceStore.notifcation$;

  ngOnInit(): void {
    this._addInvoiceStore.load();
  }

  handleClientSelected(client: Client): void {
    console.log('client selected', client);
    this._addInvoiceStore.selectClient(client);

    // this._store.dispatch(selectClient({ clientId }));
  }

  handleSaveInvoice(): void {
    console.log('handleSaveInvoice');

    const invoice: Invoice = { id: 500, name: 'Brambino' };
    this._addInvoiceStore.saveInvoice(invoice);
  }
}
