import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerFoodComponent } from './tracker-food.component';

describe('TrackerFoodComponent', () => {
  let component: TrackerFoodComponent;
  let fixture: ComponentFixture<TrackerFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
