import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AppService } from '../../../app.service';
import { catchError } from 'rxjs/operators';
import { Users } from '../../../users';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public auth;
  public users: Users[];
  public users$: Observable<Users[]>;
  public id_users;
  public id_auth;
  public us_nickname;
  public us_email;
  public us_password;
  public us_created;
  public us_modified;

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('hello').style.visibility = 'hidden';
    document.getElementById('hello').style.position = 'absolute';

    this.auth = localStorage.getItem( 'auth' );

    if ( this.auth === 'true' ) {
      document.getElementById('login').style.visibility = 'hidden';
      document.getElementById('login').style.position = 'absolute';
      document.getElementById('register').style.visibility = 'hidden';
      document.getElementById('register').style.position = 'absolute';

      document.getElementById('hello').style.visibility = 'visible';
      document.getElementById('hello').style.position = 'relative';

      //Method HttpClient
      const users$ = this.appService.getUsers()
      .pipe(
        catchError(error => {
          console.error(error);
          return empty();
        })
      );
      users$.subscribe(
        data => {
          this.users = data;
          this.showUsers();
        }
      );
      //Method HttpClient
    }
  }
  showUsers() {
    this.id_users = this.users[0].id_users;
    this.id_auth = this.users[0].id_auth;
    this.us_nickname = this.users[0].us_nickname;
    this.us_email = this.users[0].us_email;
    this.us_password = this.users[0].us_password;
    this.us_created = this.users[0].us_created;
    this.us_modified = this.users[0].us_modified;
  }
  logout() {
    localStorage.setItem( 'auth', 'false' );
    document.getElementById('hello').style.visibility = 'hidden';
    document.getElementById('hello').style.position = 'absolute';

    document.getElementById('login').style.visibility = 'visible';
    document.getElementById('login').style.position = 'relative';
    document.getElementById('register').style.visibility = 'visible';
    document.getElementById('register').style.position = 'relative';
  }

}
