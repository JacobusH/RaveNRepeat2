import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerMapComponent } from './tracker-map.component';

describe('TrackerMapComponent', () => {
  let component: TrackerMapComponent;
  let fixture: ComponentFixture<TrackerMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
