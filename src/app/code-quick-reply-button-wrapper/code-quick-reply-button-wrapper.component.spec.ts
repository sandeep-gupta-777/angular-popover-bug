import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQuickReplyButtonWrapperComponent } from './code-quick-reply-button-wrapper.component';

describe('CodeQuickReplyButtonWrapperComponent', () => {
  let component: CodeQuickReplyButtonWrapperComponent;
  let fixture: ComponentFixture<CodeQuickReplyButtonWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeQuickReplyButtonWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeQuickReplyButtonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
