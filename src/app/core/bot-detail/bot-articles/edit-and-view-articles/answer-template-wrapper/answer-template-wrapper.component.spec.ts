import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTemplateWrapperComponent } from './answer-template-wrapper.component';

describe('AnswerTemplateWrapperComponent', () => {
  let component: AnswerTemplateWrapperComponent;
  let fixture: ComponentFixture<AnswerTemplateWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerTemplateWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTemplateWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
