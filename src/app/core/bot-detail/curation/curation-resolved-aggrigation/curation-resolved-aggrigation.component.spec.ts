import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationResolvedAggrigationComponent } from './curation-resolved-aggrigation.component';

describe('CurationResolvedAggrigationComponent', () => {
  let component: CurationResolvedAggrigationComponent;
  let fixture: ComponentFixture<CurationResolvedAggrigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationResolvedAggrigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationResolvedAggrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
