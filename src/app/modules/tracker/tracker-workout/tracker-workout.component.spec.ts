import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerWorkoutComponent } from './tracker-workout.component';

describe('TrackerWorkoutComponent', () => {
  let component: TrackerWorkoutComponent;
  let fixture: ComponentFixture<TrackerWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
