import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryServComponent } from './category-serv.component';

describe('CategoryServComponent', () => {
  let component: CategoryServComponent;
  let fixture: ComponentFixture<CategoryServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
