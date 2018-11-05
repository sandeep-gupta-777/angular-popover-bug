import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQuickReplyWrapperComponent } from './code-quick-reply-wrapper.component';

describe('CodeQuickReplyWrapperComponent', () => {
  let component: CodeQuickReplyWrapperComponent;
  let fixture: ComponentFixture<CodeQuickReplyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeQuickReplyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeQuickReplyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
