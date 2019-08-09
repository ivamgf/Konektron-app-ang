import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProdComponent } from './category-prod.component';

describe('CategoryProdComponent', () => {
  let component: CategoryProdComponent;
  let fixture: ComponentFixture<CategoryProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
