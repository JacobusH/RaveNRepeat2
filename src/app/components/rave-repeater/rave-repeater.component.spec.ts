import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaveRepeaterComponent } from './rave-repeater.component';

describe('RaveRepeaterComponent', () => {
  let component: RaveRepeaterComponent;
  let fixture: ComponentFixture<RaveRepeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaveRepeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaveRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
