import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ProfileService } from './profile.service';
import { catchError } from 'rxjs/operators';
import { Profile } from './profile';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formUpdate = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    nickname: ['', [Validators.required, Validators.nullValidator]],
    birthdate: ['', [Validators.required, Validators.nullValidator]],
    sex: ['', [Validators.required, Validators.nullValidator]],
    natId: ['', [Validators.required, Validators.nullValidator]],
    phone: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.nullValidator]]
  });

  public formUp: any[] = [];
  public name: string;
  public nickname: string;
  public birthdate;
  public sex: string;
  public natId;
  public phone;
  public email: string;
  public maskNatId = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/];
  public maskPhone = ['(', /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskDate = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public profile: Profile[];
  public profile$: Observable<Profile[]>;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
    //Method HttpClient
    const profile$ = this.profileService.getProfiles()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
    profile$.subscribe(
      data => {
        this.profile = data;
        this.showForm();
      }
    );
    //Method HttpClient
  }
  showForm() {
    this.formUpdate = this.formBuilder.group({
      name: [this.profile[0].pf_name, [Validators.required, Validators.nullValidator]],
      nickname: [this.profile[0].pf_nickname, [Validators.required, Validators.nullValidator]],
      birthdate: [this.profile[0].pf_birthday, [Validators.required, Validators.nullValidator]],
      sex: [this.profile[0].pf_gender, [Validators.required, Validators.nullValidator]],
      natId: [this.profile[0].pf_natId, [Validators.required, Validators.nullValidator]],
      phone: [this.profile[0].pf_phone, [Validators.required, Validators.nullValidator]],
      email: [this.profile[0].pf_email, [Validators.required, Validators.nullValidator]]
    });
  }
  update() {
    this.formUp.push(this.formUpdate.value);
    this.name = this.formUp[0].name;
    this.nickname = this.formUp[0].nickname;
    this.birthdate = this.formUp[0].birthdate;
    this.sex = this.formUp[0].sex;
    this.natId = this.formUp[0].natId;
    this.phone = this.formUp[0].phone;
    this.email = this.formUp[0].email;

    if ( this.name !== '' && this.nickname !== '' ) {
      if ( this.natId !== '' && this.phone !== '' ) {
        if ( this.sex !== '' && this.email !== '' ) {
          if ( this.birthdate !== '' ) {
            window.scrollTo(0, -500);
            document.getElementById('alert2').style.visibility = 'visible';
            document.getElementById('alert2').style.position = 'relative';
          }
        }
      }
    }
    if ( this.name === '' ) {
    document.getElementById('alert1').style.visibility = 'visible';
    document.getElementById('alert1').style.position = 'relative';
    $(document).ready(function() {
      $('#alert1').fadeOut(10000);
      $('#alert1').load('div');
    });
    }
    if ( this.nickname === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.birthdate === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.natId === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.phone === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.sex === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.email === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
  }
  logout() {
    localStorage.setItem( 'auth', 'false' );
    this.router.navigate(['/home']);
    $(document).ready(function() {
      location.reload();
    });
  }

}
