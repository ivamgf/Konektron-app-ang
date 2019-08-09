import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Adresses } from './adresses';
import { environment } from '../../../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdressesService {

  private readonly configUrl = `${environment.API}address`;

  getAdress() {
    return this.http.get<Adresses[]>(this.configUrl, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
    ) { }
}
