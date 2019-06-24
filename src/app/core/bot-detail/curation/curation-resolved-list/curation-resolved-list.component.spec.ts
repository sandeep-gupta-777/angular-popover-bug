import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationResolvedListComponent } from './curation-resolved-list.component';

describe('CurationResolvedListComponent', () => {
  let component: CurationResolvedListComponent;
  let fixture: ComponentFixture<CurationResolvedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationResolvedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationResolvedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
