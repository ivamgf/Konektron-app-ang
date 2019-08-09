import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCustomComponent } from './checkout-custom.component';

describe('CheckoutCustomComponent', () => {
  let component: CheckoutCustomComponent;
  let fixture: ComponentFixture<CheckoutCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
