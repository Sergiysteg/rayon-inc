import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClothesComponent } from './profile-clothes.component';

describe('ProfileClothesComponent', () => {
  let component: ProfileClothesComponent;
  let fixture: ComponentFixture<ProfileClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
