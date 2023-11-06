import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../../../shared/models/state/client';

@Component({
  selector: 'app-client-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-dropdown.component.html',
  styleUrls: ['./client-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDropdownComponent {
  @Input({ required: true }) clients: Client[] = [];
  @Output() clientSelected = new EventEmitter<Client>();

  selectedClientId: string | null = null;

  handleClientSelected(): void {
    console.log('client selected', this.selectedClientId);
    if (!this.selectedClientId) return;
    const selectedClient = this.clients[parseInt(this.selectedClientId)];
    this.clientSelected.emit(selectedClient);
  }
}
