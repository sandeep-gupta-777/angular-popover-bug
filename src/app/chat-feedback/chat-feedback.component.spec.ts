import {ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick} from '@angular/core/testing';
import {ChatFeedbackComponent} from './chat-feedback.component';
import {Component} from '@angular/core';
import {configure, getElementByDataAttr, getTextContent} from '../../testing/configure-before-after.spec';
import {EChatFeedback} from '../chat/chat-wrapper.component';
import {MatIcon, MatIconModule} from '@angular/material';

@Component({
  template: `
    <app-chat-feedback [feedback]="feedback"  (chatMessageFeedback$)="outputHandler($event)"></app-chat-feedback>`
})
class HostComponent {

  feedback: EChatFeedback;
  outputHandler(data) {
    alert();
  }
}


fdescribe('ChatFeedbackComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  configure({imports: [MatIconModule], declarations: [HostComponent, ChatFeedbackComponent]});
  const oldResetTestingModule = TestBed.resetTestingModule;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture) { fixture.destroy(); }
  });

  fit('(@output)should emit chatMessageFeedback$ true when clicked on like button', fakeAsync(() => {
    spyOn(fixture.componentInstance, 'outputHandler');
    getElementByDataAttr(fixture, 'chat-upvote').click();
    flushMicrotasks();
    expect(fixture.componentInstance.outputHandler).toHaveBeenCalledWith(true);
  }));

  fit('(@outputshould emit chatMessageFeedback$ false when clicked on downvote button', fakeAsync(() => {
    spyOn(fixture.componentInstance, 'outputHandler');
    getElementByDataAttr(fixture, 'chat-downvote').click();
    flushMicrotasks();
    expect(fixture.componentInstance.outputHandler).toHaveBeenCalledWith(false);
  }));

  fit('(@Input)should show upvote button when feedback is positive', fakeAsync(() => {
    fixture.componentInstance.feedback = EChatFeedback.POSITIVE;
    fixture.detectChanges();
    expect(getTextContent(fixture)).toContain('Upvote');
    expect(getTextContent(fixture)).not.toContain('Downvote');
  }));

  fit('(@Input)should show downvote button when feedback is negative', fakeAsync(() => {
    fixture.componentInstance.feedback = EChatFeedback.NEGATIVE;
    fixture.detectChanges();
    expect(getTextContent(fixture)).toContain('Downvote');
    expect(getTextContent(fixture)).not.toContain('Upvote');
  }));

  afterAll(() => {
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });
});


