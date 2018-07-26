import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailModelComponent } from './session-detail-model.component';

describe('SessionDetailModelComponent', () => {
  let component: SessionDetailModelComponent;
  let fixture: ComponentFixture<SessionDetailModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDetailModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
