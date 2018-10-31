import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2WrapperComponent } from './analysis2-wrapper.component';

describe('Analysis2WrapperComponent', () => {
  let component: Analysis2WrapperComponent;
  let fixture: ComponentFixture<Analysis2WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2WrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
