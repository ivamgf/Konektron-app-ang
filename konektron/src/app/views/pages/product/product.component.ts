import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('img1').style.visibility = 'visible';
    document.getElementById('img2').style.visibility = 'hidden';
    document.getElementById('img3').style.visibility = 'hidden';
    document.getElementById('img4').style.visibility = 'hidden';
  }
  changeImg_1() {
    document.getElementById('img1').style.visibility = 'visible';
    document.getElementById('img2').style.visibility = 'hidden';
    document.getElementById('img3').style.visibility = 'hidden';
    document.getElementById('img4').style.visibility = 'hidden';
  }
  changeImg_2() {
    document.getElementById('img1').style.visibility = 'hidden';
    document.getElementById('img2').style.visibility = 'visible';
    document.getElementById('img3').style.visibility = 'hidden';
    document.getElementById('img4').style.visibility = 'hidden';
  }
  changeImg_3() {
    document.getElementById('img1').style.visibility = 'hidden';
    document.getElementById('img2').style.visibility = 'hidden';
    document.getElementById('img3').style.visibility = 'visible';
    document.getElementById('img4').style.visibility = 'hidden';
  }
  changeImg_4() {
    document.getElementById('img1').style.visibility = 'hidden';
    document.getElementById('img2').style.visibility = 'hidden';
    document.getElementById('img3').style.visibility = 'hidden';
    document.getElementById('img4').style.visibility = 'visible';
  }
}
