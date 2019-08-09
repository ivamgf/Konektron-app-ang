import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryProdComponent } from './galery-prod.component';

describe('GaleryProdComponent', () => {
  let component: GaleryProdComponent;
  let fixture: ComponentFixture<GaleryProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
