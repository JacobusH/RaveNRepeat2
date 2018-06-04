import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerMusicComponent } from './tracker-music.component';

describe('TrackerMusicComponent', () => {
  let component: TrackerMusicComponent;
  let fixture: ComponentFixture<TrackerMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
