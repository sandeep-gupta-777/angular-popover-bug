import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHandoverAndInterfaceFormComponent } from './faq-handover-and-interface-form.component';

describe('FaqHandoverAndInterfaceFormComponent', () => {
  let component: FaqHandoverAndInterfaceFormComponent;
  let fixture: ComponentFixture<FaqHandoverAndInterfaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqHandoverAndInterfaceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqHandoverAndInterfaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
