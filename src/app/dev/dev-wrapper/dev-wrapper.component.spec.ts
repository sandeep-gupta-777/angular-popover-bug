import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevWrapperComponent } from './dev-wrapper.component';

describe('DevWrapperComponent', () => {
  let component: DevWrapperComponent;
  let fixture: ComponentFixture<DevWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
