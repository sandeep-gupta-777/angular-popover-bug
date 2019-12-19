import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqImportFromLinkComponent } from './faq-import-from-link.component';

describe('FaqImportFromLinkComponent', () => {
  let component: FaqImportFromLinkComponent;
  let fixture: ComponentFixture<FaqImportFromLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqImportFromLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqImportFromLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
