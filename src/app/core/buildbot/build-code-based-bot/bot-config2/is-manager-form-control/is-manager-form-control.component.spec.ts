import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsManagerFormControlComponent } from './is-manager-form-control.component';

describe('IsManagerFormControlComponent', () => {
  let component: IsManagerFormControlComponent;
  let fixture: ComponentFixture<IsManagerFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsManagerFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsManagerFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
