import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArrivalsComponent } from './home-arrivals.component';

describe('HomeArrivalsComponent', () => {
  let component: HomeArrivalsComponent;
  let fixture: ComponentFixture<HomeArrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
