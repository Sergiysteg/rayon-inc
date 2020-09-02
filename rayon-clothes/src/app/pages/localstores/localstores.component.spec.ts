import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstoresComponent } from './localstores.component';

describe('LocalstoresComponent', () => {
  let component: LocalstoresComponent;
  let fixture: ComponentFixture<LocalstoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalstoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
