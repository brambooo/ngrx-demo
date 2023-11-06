import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../shared/models/state/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'http://localhost:3000/clients';

  getAll(): Observable<Client[]> {
    return this._http.get<Client[]>(this._baseUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this._http.post<Client>(this._baseUrl, client);
  }

  removeClient(clientId: number): Observable<unknown> {
    return this._http.delete<unknown>(`${this._baseUrl}/${clientId}`);
  }
}
