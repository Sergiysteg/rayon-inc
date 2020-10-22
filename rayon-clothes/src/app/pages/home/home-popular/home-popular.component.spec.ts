import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularComponent } from './home-popular.component';

describe('HomePopularComponent', () => {
  let component: HomePopularComponent;
  let fixture: ComponentFixture<HomePopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
