import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Users } from './users';
import { Cep } from './cep';
import { environment } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly configUrl = `${environment.API}users`;
  private readonly cepUrl = `${environment.APIcep}`;
  private readonly cepFormat = `/json/`;

  getUsers() {
    return this.http.get<Users[]>(this.configUrl, httpOptions).pipe(take(1));
  }

  getCep(cep: string) {
    return this.http.get<Cep[]>(this.cepUrl + cep + this.cepFormat, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
