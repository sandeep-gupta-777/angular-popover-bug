import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCodeBasedBotComponent } from './view-code-based-bot.component';

describe('ViewCodeBasedBotComponent', () => {
  let component: ViewCodeBasedBotComponent;
  let fixture: ComponentFixture<ViewCodeBasedBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCodeBasedBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCodeBasedBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
