import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationIssuesListComponent } from './curation-issues-list.component';

describe('CurationIssuesListComponent', () => {
  let component: CurationIssuesListComponent;
  let fixture: ComponentFixture<CurationIssuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationIssuesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
