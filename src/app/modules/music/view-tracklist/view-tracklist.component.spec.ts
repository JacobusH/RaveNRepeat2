import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTracklistComponent } from './view-tracklist.component';

describe('ViewTracklistComponent', () => {
  let component: ViewTracklistComponent;
  let fixture: ComponentFixture<ViewTracklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTracklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
