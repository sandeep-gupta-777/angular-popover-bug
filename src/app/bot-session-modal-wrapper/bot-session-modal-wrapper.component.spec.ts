import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSessionModalWrapperComponent } from './bot-session-modal-wrapper.component';

describe('BotSessionModalWrapperComponent', () => {
  let component: BotSessionModalWrapperComponent;
  let fixture: ComponentFixture<BotSessionModalWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotSessionModalWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotSessionModalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
