import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  formCard = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    number: ['', [Validators.required, Validators.nullValidator]],
    brand: ['', [Validators.required, Validators.nullValidator]],
    expire: ['', [Validators.required, Validators.nullValidator]],
    code: ['', [Validators.required, Validators.nullValidator]]
  });

  public formCd: any[] = [];
  public name: string;
  public number;
  public brand: string;
  public expire;
  public code;
  public maskExpire = [/[0-1]/, /[0-9]/, '/', /[0-9]/, /[0-9]/];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
  }
  regCard() {
    this.formCd.push(this.formCard.value);
    this.name = this.formCd[0].name;
    this.number = this.formCd[0].number;
    this.brand = this.formCd[0].brand;
    this.expire = this.formCd[0].expire;
    this.code = this.formCd[0].code;

    if ( this.name !== '' && this.number !== '' ) {
      if ( this.brand !== '' && this.expire !== '' ) {
        if ( this.code !== '' ) {
          window.scrollTo(0, -500);
          document.getElementById('alert2').style.visibility = 'visible';
          document.getElementById('alert2').style.position = 'relative';
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
    if ( this.number === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.brand === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.expire === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.code === '' ) {
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
