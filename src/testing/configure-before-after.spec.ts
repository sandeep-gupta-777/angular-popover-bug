import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ChatFeedbackComponent} from "../app/chat-feedback/chat-feedback.component";
import {MatIcon} from "@angular/material";

export function configure(HostComponent, TestComponent, modules:{modules:any[]}) {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, TestComponent],
      imports:modules.modules
    });
  }));

}

export function getTextContent(fixture) {
  return fixture.debugElement.nativeElement.textContent
}

export function getElementByDataAttr(fixture, attr) {
  return fixture.debugElement.nativeElement.querySelector(`[data-cy="${attr}"]`);
}


// function createHostComponent(template?: string): ComponentFixture<HostComponent> {
//   if (template) TestBed.overrideComponent(HostComponent, {set: {template: template}});
//   const fixture = TestBed.createComponent(HostComponent);
//   fixture.detectChanges();
//   return fixture as ComponentFixture<HostComponent>;
// }