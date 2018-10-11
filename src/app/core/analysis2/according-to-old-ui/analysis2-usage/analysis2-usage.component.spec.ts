import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2UsageComponent } from './analysis2-usage.component';

describe('Analysis2UsageComponent', () => {
  let component: Analysis2UsageComponent;
  let fixture: ComponentFixture<Analysis2UsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2UsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2UsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
