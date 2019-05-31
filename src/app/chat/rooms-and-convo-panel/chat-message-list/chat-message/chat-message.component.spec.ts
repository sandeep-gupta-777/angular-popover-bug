import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {Component} from "@angular/core";
import {ChatMessageComponent} from "./chat-message.component";
import {configure, getElementByDataAttr, getTextContent} from "../../../../../testing/configure-before-after.spec";
import {EBotMessageMediaType, IMessageData} from "../../../../../interfaces/chat-session-state";
import {IBot} from "../../../../core/interfaces/IBot";
import {LinkifyPipe} from "../../../../linkify.pipe";
import {RouterTestingModule} from "@angular/router/testing";
import {EChatFeedback} from "../../../chat-wrapper.component";

@Component({
  template: `
    <app-chat-message [bot]="bot" [allow_feedback]="allow_feedback" [isLastMessage]="isLastMessage" [messageData]="messageData"></app-chat-message>
  `
})
class HostComponent {
  isLastMessage: boolean = true;
  bot: IBot = {logo: "", id:1, allow_feedback:true};
  allow_feedback = true;
  messageData: IMessageData = {
    text: 'this is a test',
    time: 1559271438949,//Date.now(),
    sourceType: 'bot',
    messageMediatype: EBotMessageMediaType.text,
    bot_message_id: 123,
    feedback: EChatFeedback.POSITIVE,
  };
}


fdescribe('ChatMessageComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostInstance:HostComponent;
  configure( {
    imports: [RouterTestingModule.withRoutes([])],
    declarations:[LinkifyPipe, HostComponent, ChatMessageComponent]
  });
  const oldResetTestingModule = TestBed.resetTestingModule;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture) fixture.destroy();
  });

  fit('(@Input)should show upvote button when feedback is positive', fakeAsync(() => {
    hostInstance.messageData.sourceType = 'session_expired';
    fixture.detectChanges();
    expect(getElementByDataAttr(fixture, 'chat-session_expired')).toBeTruthy();
  }));

  fit('(@Input)should show upvote button when feedback is positive1', fakeAsync(() => {
    expect(getTextContent(fixture)).toContain(fixture.componentInstance.messageData.text);
    expect(getTextContent(fixture)).toContain("8:27 AM");
    expect(getElementByDataAttr(fixture, 'app-chat-feedback')).toBeTruthy();
  }));


  afterAll(() => {
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });
});


