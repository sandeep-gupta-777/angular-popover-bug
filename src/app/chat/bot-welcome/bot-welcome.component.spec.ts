import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWelcomeComponent } from './bot-welcome.component';

describe('BotWelcomeComponent', () => {
  let component: BotWelcomeComponent;
  let fixture: ComponentFixture<BotWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
