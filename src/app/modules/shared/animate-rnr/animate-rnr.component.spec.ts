import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateRnrComponent } from './animate-rnr.component';

describe('AnimateRnrComponent', () => {
  let component: AnimateRnrComponent;
  let fixture: ComponentFixture<AnimateRnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateRnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateRnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
