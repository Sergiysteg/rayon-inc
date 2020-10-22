import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothDetailComponent } from './cloth-detail.component';

describe('ClothDetailComponent', () => {
  let component: ClothDetailComponent;
  let fixture: ComponentFixture<ClothDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
