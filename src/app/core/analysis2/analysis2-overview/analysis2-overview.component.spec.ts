import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2OverviewComponent } from './analysis2-overview.component';

describe('Analysis2OverviewComponent', () => {
  let component: Analysis2OverviewComponent;
  let fixture: ComponentFixture<Analysis2OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2OverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
