import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSwitchWrapperComponent } from './ui-switch-wrapper.component';

describe('UiSwitchComponent', () => {
  let component: UiSwitchWrapperComponent;
  let fixture: ComponentFixture<UiSwitchWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSwitchWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSwitchWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
