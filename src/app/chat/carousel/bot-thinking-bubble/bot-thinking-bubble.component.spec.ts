import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotThinkingBubbleComponent } from './bot-thinking-bubble.component';

describe('BotThinkingBubbleComponent', () => {
  let component: BotThinkingBubbleComponent;
  let fixture: ComponentFixture<BotThinkingBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotThinkingBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotThinkingBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
