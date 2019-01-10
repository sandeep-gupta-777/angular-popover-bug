import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseOverviewComponent } from './enterprise-overview.component';

describe('EnterpriseOverviewComponent', () => {
  let component: EnterpriseOverviewComponent;
  let fixture: ComponentFixture<EnterpriseOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
