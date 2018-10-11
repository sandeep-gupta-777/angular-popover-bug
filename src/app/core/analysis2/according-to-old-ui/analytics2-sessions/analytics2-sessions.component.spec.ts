import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics2SessionsComponent } from './analytics2-sessions.component';

describe('Analytics2SessionsComponent', () => {
  let component: Analytics2SessionsComponent;
  let fixture: ComponentFixture<Analytics2SessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analytics2SessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analytics2SessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
