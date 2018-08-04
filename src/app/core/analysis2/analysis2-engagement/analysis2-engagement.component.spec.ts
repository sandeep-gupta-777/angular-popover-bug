import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2EngagementComponent } from './analysis2-engagement.component';

describe('Analysis2EngagementComponent', () => {
  let component: Analysis2EngagementComponent;
  let fixture: ComponentFixture<Analysis2EngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2EngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2EngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
