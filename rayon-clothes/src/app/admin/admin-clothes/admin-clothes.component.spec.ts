import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClothesComponent } from './admin-clothes.component';

describe('AdminClothesComponent', () => {
  let component: AdminClothesComponent;
  let fixture: ComponentFixture<AdminClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
