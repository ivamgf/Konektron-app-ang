import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Profile } from './profile';
import { environment } from '../../../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly configUrl = `${environment.API}profiles`;

  getProfiles() {
    return this.http.get<Profile[]>(this.configUrl, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
