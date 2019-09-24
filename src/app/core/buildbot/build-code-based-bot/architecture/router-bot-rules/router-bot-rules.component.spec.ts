import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBotRulesComponent } from './router-bot-rules.component';

describe('RouterBotRulesComponent', () => {
  let component: RouterBotRulesComponent;
  let fixture: ComponentFixture<RouterBotRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterBotRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterBotRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
