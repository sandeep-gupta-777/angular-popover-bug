import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPreviewNewPageComponent } from './chat-preview-new-page.component';

describe('ChatPreviewNewPageComponent', () => {
  let component: ChatPreviewNewPageComponent;
  let fixture: ComponentFixture<ChatPreviewNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPreviewNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPreviewNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
