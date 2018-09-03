import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2Engagement1Component } from './analysis2-engagement1.component';

describe('Analysis2Engagement1Component', () => {
  let component: Analysis2Engagement1Component;
  let fixture: ComponentFixture<Analysis2Engagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2Engagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2Engagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
