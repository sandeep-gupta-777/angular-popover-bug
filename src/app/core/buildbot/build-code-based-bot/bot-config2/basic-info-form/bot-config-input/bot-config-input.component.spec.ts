import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConfigInputComponent } from './bot-config-input.component';

describe('BotConfigInputComponent', () => {
  let component: BotConfigInputComponent;
  let fixture: ComponentFixture<BotConfigInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConfigInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConfigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
