import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseUsersComponent } from './enterprise-users.component';

describe('EnterpriseUsersComponent', () => {
  let component: EnterpriseUsersComponent;
  let fixture: ComponentFixture<EnterpriseUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
