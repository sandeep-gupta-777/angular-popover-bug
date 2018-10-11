import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2PerformanceComponent } from './analysis2-performance.component';

describe('Analysis2PerformanceComponent', () => {
  let component: Analysis2PerformanceComponent;
  let fixture: ComponentFixture<Analysis2PerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2PerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2PerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
