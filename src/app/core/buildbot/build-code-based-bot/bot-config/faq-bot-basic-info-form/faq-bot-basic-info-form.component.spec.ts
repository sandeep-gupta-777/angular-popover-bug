import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBotBasicInfoFormComponent } from './faq-bot-basic-info-form.component';

describe('FaqBotBasicInfoFormComponent', () => {
  let component: FaqBotBasicInfoFormComponent;
  let fixture: ComponentFixture<FaqBotBasicInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqBotBasicInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqBotBasicInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
