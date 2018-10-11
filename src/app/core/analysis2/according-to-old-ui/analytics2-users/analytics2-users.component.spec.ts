import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics2UsersComponent } from './analytics2-users.component';

describe('Analytics2UsersComponent', () => {
  let component: Analytics2UsersComponent;
  let fixture: ComponentFixture<Analytics2UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analytics2UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analytics2UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
