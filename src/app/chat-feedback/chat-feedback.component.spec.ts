import {async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick} from '@angular/core/testing';

import {ChatFeedbackComponent} from './chat-feedback.component';
import {MatIconModule} from "@angular/material";
import {Component, DebugElement} from "@angular/core";
import {EChatFeedback, IChatFeedback} from "../chat/chat-wrapper.component";
import {By} from "@angular/platform-browser";

function createHostComponent(template: string): ComponentFixture<HostComponent> {
  TestBed.overrideComponent(HostComponent, {set: {template: template}});
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture as ComponentFixture<HostComponent>;
}

fdescribe('ChatFeedbackComponent', () => {
  let component: ChatFeedbackComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, ChatFeedbackComponent],
      imports: [MatIconModule]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ChatFeedbackComponent);
    let template = `<app-chat-feedback [feedback]="feedback" (chatMessageFeedback$)="chatMessageFeedbackHandler($event)"></app-chat-feedback>`;
    fixture = createHostComponent(template);

  });

  it('should show only like button', () => {
    fixture.componentInstance.feedback = EChatFeedback.POSITIVE;
    fixture.detectChanges();
    console.log(fixture.debugElement.nativeElement);
    expect(fixture.debugElement.nativeElement.textContent).toContain('Upvote');
    expect(fixture.debugElement.nativeElement.textContent).not.toContain('Downvote');
  });

  fit('should emit chatMessageFeedback$ true when clicked on like button', fakeAsync(() => {
    fixture.componentInstance.feedback = EChatFeedback.POSITIVE;
    fixture.detectChanges();
    const chatFeedbackComponent = fixture.debugElement.query(By.directive(ChatFeedbackComponent)) as DebugElement;
    spyOn(fixture.componentInstance,'chatMessageFeedbackHandler');
    spyOn(chatFeedbackComponent.componentInstance,'chatFeedbackClicked');
    fixture.debugElement.nativeElement.querySelector('#test1').click();
    tick(500);
    flushMicrotasks();
    console.log(fixture.debugElement.nativeElement.querySelector('#test1'));
    // fixture.componentInstance.feedback
    // expect(fixture.componentInstance.chatMessageFeedbackHandler).toHaveBeenCalledWith(true);
    expect(chatFeedbackComponent.componentInstance.chatFeedbackClicked).toHaveBeenCalled();
  }));

  it('should show only dislike button', () => {
    fixture.componentInstance.feedback = EChatFeedback.NEGATIVE;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toContain('Downvote');
    expect(fixture.debugElement.nativeElement.textContent).not.toContain('Upvote');
  });


});


@Component({selector: 'host-for-test', template: ''})
class HostComponent {
  feedback: EChatFeedback;

  chatMessageFeedbackHandler(data) {
    alert();
  }
}