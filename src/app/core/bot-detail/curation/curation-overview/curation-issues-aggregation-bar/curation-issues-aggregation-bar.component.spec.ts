import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationIssuesAggregationBarComponent } from './curation-issues-aggregation-bar.component';

describe('CurationIssuesAggregationBarComponent', () => {
  let component: CurationIssuesAggregationBarComponent;
  let fixture: ComponentFixture<CurationIssuesAggregationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationIssuesAggregationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationIssuesAggregationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
