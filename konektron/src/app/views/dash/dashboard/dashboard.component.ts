import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    localStorage.setItem( 'auth', 'false' );
    this.router.navigate(['/home']);
    $(document).ready(function() {
      location.reload();
    });
  }
}
