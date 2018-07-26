import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportControlsComponent } from './report-controls.component';

describe('ReportControlsComponent', () => {
  let component: ReportControlsComponent;
  let fixture: ComponentFixture<ReportControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
