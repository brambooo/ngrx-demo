import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsEntity } from './+state/clients.models';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'http://localhost:3000/clients';
  //   private configService = inject(ConfigService);

  getAll(): Observable<ClientsEntity[]> {
    return this._http.get<ClientsEntity[]>(this._baseUrl);
  }

  addClient(client: ClientsEntity): Observable<ClientsEntity> {
    return this._http.post<ClientsEntity>(this._baseUrl, client);
  }

  removeClient(clientId: number): Observable<unknown> {
    // Make sure we parse correctly to number

    return this._http.delete<unknown>(`${this._baseUrl}/${clientId}`);
  }

  //   find(from: string, to: string, urgent = false): Observable<Flight[]> {
  //     const url = `${this.configService.config.baseUrl}/flight`;

  //     const headers = {
  //       Accept: 'application/json',
  //     };

  //     const params = { from, to, urgent };

  //     return this.http.get<Flight[]>(url, { headers, params });
  //   }

  //   findPromise(from: string, to: string, urgent = false): Promise<Flight[]> {
  //     return firstValueFrom(this.find(from, to, urgent));
  //   }

  //   findById(id: string): Observable<Flight> {
  //     const url = `${this.configService.config.baseUrl}/flight`;

  //     const headers = {
  //       Accept: 'application/json',
  //     };

  //     const params = { id };

  //     return this.http.get<Flight>(url, { headers, params });
  //   }
}
