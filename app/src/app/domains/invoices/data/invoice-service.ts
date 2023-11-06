import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../../shared/models/state';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'http://localhost:3000/invoices';
  //   private configService = inject(ConfigService);

  getAll(): Observable<Invoice[]> {
    return this._http.get<Invoice[]>(this._baseUrl);
  }

  add(client: Invoice): Observable<Invoice> {
    return this._http.post<Invoice>(this._baseUrl, client);
  }

  remove(invoiceId: number): Observable<unknown> {
    return this._http.delete<unknown>(`${this._baseUrl}/${invoiceId}`);
  }
}
