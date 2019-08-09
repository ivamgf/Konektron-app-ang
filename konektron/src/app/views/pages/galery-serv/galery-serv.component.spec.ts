import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryServComponent } from './galery-serv.component';

describe('GaleryServComponent', () => {
  let component: GaleryServComponent;
  let fixture: ComponentFixture<GaleryServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
