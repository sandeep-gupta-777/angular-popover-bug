import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationFilterComponent } from './curation-filter.component';

describe('CurationFilterComponent', () => {
  let component: CurationFilterComponent;
  let fixture: ComponentFixture<CurationFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
