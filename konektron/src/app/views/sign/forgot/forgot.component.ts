import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  formForgot = this.formBuilder.group({
    password: ['', [Validators.required, Validators.nullValidator]],
    confirm: ['', [Validators.required, Validators.nullValidator]]
  });

  public password: string;
  public confirm: string;
  public formRecovery: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
    document.getElementById('alert3').style.visibility = 'hidden';
    document.getElementById('alert4').style.visibility = 'hidden';
    document.getElementById('alert5').style.visibility = 'hidden';
  }
  forgot() {
    this.formRecovery.push(this.formForgot.value);
    this.password = this.formRecovery[0].password;
    this.confirm = this.formRecovery[0].confirm;
    if ( this.password !== '' && this.confirm !== '' ) {
      if ( this.password.length >= 6 && this.confirm.length >= 6 ) {
        if ( this.password === this.confirm ) {
          document.getElementById('alert4').style.visibility = 'visible';
          document.getElementById('alert4').style.position = 'relative';
        } else {
          document.getElementById('alert3').style.visibility = 'visible';
          document.getElementById('alert3').style.position = 'relative';
          $(document).ready(function() {
            $('#alert3').fadeOut(10000);
            $('#alert3').load('div');
          });
        }
      } else {
        document.getElementById('alert5').style.visibility = 'visible';
        document.getElementById('alert5').style.position = 'relative';
        $(document).ready(function() {
          $('#alert5').fadeOut(10000);
          $('#alert5').load('div');
        });
      }

    } else {
      if ( this.password === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        $(document).ready(function() {
          $('#alert1').fadeOut(10000);
          $('#alert1').load('div');
        });
      }
      if ( this.confirm === '' ) {
        document.getElementById('alert2').style.visibility = 'visible';
        document.getElementById('alert2').style.position = 'relative';
        $(document).ready(function() {
          $('#alert2').fadeOut(10000);
          $('#alert2').load('div');
        });
      }
    }
  }
  backSignin() {
    this.router.navigate(['/signin']);
  }

}
