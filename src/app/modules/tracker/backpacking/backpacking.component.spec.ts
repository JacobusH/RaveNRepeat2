import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackingComponent } from './backpacking.component';

describe('BackpackingComponent', () => {
  let component: BackpackingComponent;
  let fixture: ComponentFixture<BackpackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
