import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationSettingsComponent } from './curation-settings.component';

describe('CurationSettingsComponent', () => {
  let component: CurationSettingsComponent;
  let fixture: ComponentFixture<CurationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
