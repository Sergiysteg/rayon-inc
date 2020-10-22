import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPopularComponent } from './admin-popular.component';

describe('AdminPopularComponent', () => {
  let component: AdminPopularComponent;
  let fixture: ComponentFixture<AdminPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
