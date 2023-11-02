import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ClientsEntity } from '../data/+state/clients.models';

@Component({
  selector: 'app-add-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-client-form.component.html',
  styleUrls: ['./add-client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddClientFormComponent {
  private readonly _fb = inject(FormBuilder);
  @Output() save = new EventEmitter<ClientsEntity>();

  readonly clientForm = this._fb.nonNullable.group({
    name: '',
    email: '',
  });

  handleSubmit() {
    this.save.emit(this.clientForm.getRawValue());
  }
}
