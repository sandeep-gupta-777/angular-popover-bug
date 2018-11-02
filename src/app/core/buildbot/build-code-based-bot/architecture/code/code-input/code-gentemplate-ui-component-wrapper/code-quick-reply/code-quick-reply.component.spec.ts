import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQuickReplyComponent } from './code-quick-reply.component';

describe('CodeQuickReplyComponent', () => {
  let component: CodeQuickReplyComponent;
  let fixture: ComponentFixture<CodeQuickReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeQuickReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeQuickReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
