import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerBeerComponent } from './tracker-beer.component';

describe('TrackerBeerComponent', () => {
  let component: TrackerBeerComponent;
  let fixture: ComponentFixture<TrackerBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
