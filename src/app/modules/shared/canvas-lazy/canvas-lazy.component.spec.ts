import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasLazyComponent } from './canvas-lazy.component';

describe('CanvasLazyComponent', () => {
  let component: CanvasLazyComponent;
  let fixture: ComponentFixture<CanvasLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
