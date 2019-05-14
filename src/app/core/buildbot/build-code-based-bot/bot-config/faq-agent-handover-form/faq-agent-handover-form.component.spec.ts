import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAgentHandoverFormComponent } from './faq-agent-handover-form.component';

describe('FaqAgentHandoverFormComponent', () => {
  let component: FaqAgentHandoverFormComponent;
  let fixture: ComponentFixture<FaqAgentHandoverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqAgentHandoverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAgentHandoverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
