import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBlockComponent } from './topic-block.component';

describe('TopicBlockComponent', () => {
  let component: TopicBlockComponent;
  let fixture: ComponentFixture<TopicBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
