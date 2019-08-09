import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formRegister = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    nickname: ['', [Validators.required, Validators.nullValidator]],
    sex: ['', [Validators.required, Validators.nullValidator]],
    natId: ['', [Validators.required, Validators.nullValidator]],
    phone: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.nullValidator]],
    password: ['', [Validators.required, Validators.nullValidator]],
    confirm: ['', [Validators.required, Validators.nullValidator]]
  });

  public formReg: any[] = [];
  public name: string;
  public nickname: string;
  public sex: string;
  public natId;
  public phone;
  public email: string;
  public password: string;
  public confirm: string;
  public maskNatId = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/];
  public maskPhone = ['(', /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
    document.getElementById('alert3').style.visibility = 'hidden';
    document.getElementById('alert4').style.visibility = 'hidden';
  }
  register() {
    this.formReg.push(this.formRegister.value);
    this.name = this.formReg[0].name;
    this.nickname = this.formReg[0].nickname;
    this.sex = this.formReg[0].sex;
    this.natId = this.formReg[0].natId;
    this.phone = this.formReg[0].phone;
    this.email = this.formReg[0].email;
    this.password = this.formReg[0].password;
    this.confirm = this.formReg[0].confirm;

    console.log(this.password.length);

    if ( this.name !== '' && this.nickname !== '' ) {
      if ( this.natId !== '' && this.phone !== '' ) {
        if ( this.sex !== '' && this.email !== '' ) {
          if ( this.password !== '' ) {
            if ( this.confirm !== '' ) {
              if ( this.password.length >= 6 && this.confirm.length >= 6 ) {
                if ( this.password === this.confirm ) {
                  window.scrollTo(0, -500);
                  document.getElementById('alert3').style.visibility = 'visible';
                  document.getElementById('alert3').style.position = 'relative';
                } else {
                  document.getElementById('alert2').style.visibility = 'visible';
                  document.getElementById('alert2').style.position = 'relative';
                  $(document).ready(function() {
                    $('#alert2').fadeOut(10000);
                    $('#alert2').load('div');
                  });
                }
              } else {
                document.getElementById('alert4').style.visibility = 'visible';
                document.getElementById('alert4').style.position = 'relative';
                $(document).ready(function() {
                  $('#alert4').fadeOut(10000);
                  $('#alert4').load('div');
                });
              }
            }
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
    if ( this.password === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.confirm === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
  }
  backSignin() {
    this.router.navigate(['/signin']);
  }
}
