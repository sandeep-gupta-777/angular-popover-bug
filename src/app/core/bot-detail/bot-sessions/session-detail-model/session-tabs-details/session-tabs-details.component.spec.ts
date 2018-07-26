import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTabsDetailsComponent } from './session-tabs-details.component';

describe('SessionTabsDetailsComponent', () => {
  let component: SessionTabsDetailsComponent;
  let fixture: ComponentFixture<SessionTabsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTabsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTabsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
