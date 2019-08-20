import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatKnowMorePanelComponent } from './chat-know-more-panel.component';

describe('ChatKnowMorePanelComponent', () => {
  let component: ChatKnowMorePanelComponent;
  let fixture: ComponentFixture<ChatKnowMorePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatKnowMorePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatKnowMorePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
