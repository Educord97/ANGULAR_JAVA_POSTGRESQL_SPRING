import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { Contato } from './contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  save(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }

  list() : Observable<Contato[]> {
    return this.http.get<any>(this.url);
  }

  favorite(contato: Contato): Observable<any> {
    return this.http.patch( `${this.url}/${contato.id}/favorito`, null);
  }

  // tslint:disable-next-line:typedef
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
