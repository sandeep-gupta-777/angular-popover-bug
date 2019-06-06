import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotThinkingComponent } from './chat-bot-thinking.component';

describe('ChatBotThinkingComponent', () => {
  let component: ChatBotThinkingComponent;
  let fixture: ComponentFixture<ChatBotThinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBotThinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
