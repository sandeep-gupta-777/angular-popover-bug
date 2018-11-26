import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConsumerFormComponent } from './chat-consumer-form.component';

describe('ChatConsumerFormComponent', () => {
  let component: ChatConsumerFormComponent;
  let fixture: ComponentFixture<ChatConsumerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatConsumerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConsumerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
