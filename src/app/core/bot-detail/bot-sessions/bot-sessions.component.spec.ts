import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSessionsComponent } from './bot-sessions.component';

describe('BotSessionsComponent', () => {
  let component: BotSessionsComponent;
  let fixture: ComponentFixture<BotSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
