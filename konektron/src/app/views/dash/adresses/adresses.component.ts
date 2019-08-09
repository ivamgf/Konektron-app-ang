import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import * as $ from 'jquery';

import { AdressesService } from './adresses.service';
import { AppService } from '../../../app.service';
import { Adresses } from './adresses';
import { Cep } from '../../../cep';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.scss']
})
export class AdressesComponent implements OnInit {

  formAdress = this.formBuilder.group({
    cep: ['', [Validators.required, Validators.nullValidator]],
    street: ['', [Validators.required, Validators.nullValidator]],
    number: ['', [Validators.required, Validators.nullValidator]],
    compl: ['', [Validators.required, Validators.nullValidator]],
    block: ['', [Validators.required, Validators.nullValidator]],
    city: ['', [Validators.required, Validators.nullValidator]],
    uf: ['', [Validators.required, Validators.nullValidator]]
  });

  public formAd: any[] = [];
  public cep;
  public street: string;
  public number;
  public compl: string;
  public block: string;
  public city: string;
  public uf: string;
  public maskCep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  public adress: Adresses[];
  public adress$: Observable<Adresses[]>;
  public viaCep: Cep[];
  public viaCep$: Observable<Cep[]>;
  public matrixCep: any[] = [];

  constructor(
    private appService: AppService,
    private adressesService: AdressesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
    //Method HttpClient
    const adress$ = this.adressesService.getAdress()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
    adress$.subscribe(
      data => {
        this.adress = data;
        this.showForm();
      }
    );
    //Method HttpClient
  }
  showForm() {
    this.formAdress = this.formBuilder.group({
      cep: [this.adress[0].as_cep, [Validators.required, Validators.nullValidator]],
      street: [this.adress[0].as_address, [Validators.required, Validators.nullValidator]],
      number: [this.adress[0].as_number, [Validators.required, Validators.nullValidator]],
      compl: [this.adress[0].as_compl, [Validators.required, Validators.nullValidator]],
      block: [this.adress[0].as_block, [Validators.required, Validators.nullValidator]],
      city: [this.adress[0].as_city, [Validators.required, Validators.nullValidator]],
      uf: [this.adress[0].as_uf, [Validators.required, Validators.nullValidator]]
    });
  }
  cepAdress() {
    this.formAd.push(this.formAdress.value);
    let cep = this.formAd[0].cep;
    this.appService.getCep(cep);

    //Method HttpClient
    const viaCep$ = this.appService.getCep(cep)
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
    viaCep$.subscribe(
      data => {
        this.viaCep = data;
        this.matrixCep.push(this.viaCep);
        this.complForm();
      }
    );
    //Method HttpClient
  }
  complForm() {
    this.formAdress = this.formBuilder.group({
      cep: [this.matrixCep[0].cep, [Validators.required, Validators.nullValidator]],
      street: [this.matrixCep[0].logradouro, [Validators.required, Validators.nullValidator]],
      number: ['', [Validators.required, Validators.nullValidator]],
      compl: [this.matrixCep[0].complemento, [Validators.required, Validators.nullValidator]],
      block: [this.matrixCep[0].bairro, [Validators.required, Validators.nullValidator]],
      city: [this.matrixCep[0].localidade, [Validators.required, Validators.nullValidator]],
      uf: [this.matrixCep[0].uf, [Validators.required, Validators.nullValidator]]
    });
  }
  regAdress() {
    this.formAd.push(this.formAdress.value);
    this.cep = this.formAd[0].cep;
    this.street = this.formAd[0].street;
    this.number = this.formAd[0].number;
    this.compl = this.formAd[0].compl;
    this.block = this.formAd[0].block;
    this.city = this.formAd[0].city;
    this.uf = this.formAd[0].uf;

    if ( this.cep !== '' && this.street !== '' ) {
      if ( this.number !== '' && this.compl !== '' ) {
        if ( this.block !== '' && this.city !== '' ) {
          if ( this.uf !== '' ) {
            window.scrollTo(0, -500);
            document.getElementById('alert2').style.visibility = 'visible';
            document.getElementById('alert2').style.position = 'relative';
          }
        }
      }
    }
    if ( this.cep === '' ) {
    document.getElementById('alert1').style.visibility = 'visible';
    document.getElementById('alert1').style.position = 'relative';
    $(document).ready(function() {
      $('#alert1').fadeOut(10000);
      $('#alert1').load('div');
    });
    }
    if ( this.street === '' ) {
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
    if ( this.compl === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.block === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.city === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
    if ( this.uf === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      $(document).ready(function() {
        $('#alert1').fadeOut(10000);
        $('#alert1').load('div');
      });
    }
  }
  searchCep() {
    $(document).ready(function() {
      location.href = 'http://www.buscacep.correios.com.br/sistemas/buscacep/';
    });
  }
  logout() {
    localStorage.setItem( 'auth', 'false' );
    this.router.navigate(['/home']);
    $(document).ready(function() {
      location.reload();
    });
  }

}
