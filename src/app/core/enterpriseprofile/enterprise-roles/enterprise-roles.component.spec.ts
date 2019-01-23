import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseRolesComponent } from './enterprise-roles.component';

describe('EnterpriseRolesComponent', () => {
  let component: EnterpriseRolesComponent;
  let fixture: ComponentFixture<EnterpriseRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
