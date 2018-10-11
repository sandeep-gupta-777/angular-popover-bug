import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationOptionListComponent } from './integration-option-list.component';

describe('IntegrationOptionListComponent', () => {
  let component: IntegrationOptionListComponent;
  let fixture: ComponentFixture<IntegrationOptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationOptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
