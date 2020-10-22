import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArrivalsComponent } from './admin-arrivals.component';

describe('AdminArrivalsComponent', () => {
  let component: AdminArrivalsComponent;
  let fixture: ComponentFixture<AdminArrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
