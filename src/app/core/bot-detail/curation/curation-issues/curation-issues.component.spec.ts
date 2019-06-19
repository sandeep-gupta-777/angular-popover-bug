import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationIssuesComponent } from './curation-issues.component';

describe('CurationIssuesComponent', () => {
  let component: CurationIssuesComponent;
  let fixture: ComponentFixture<CurationIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
