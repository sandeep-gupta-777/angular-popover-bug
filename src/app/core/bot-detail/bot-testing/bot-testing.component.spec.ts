import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotTestingComponent } from './bot-testing.component';

describe('BotTestingComponent', () => {
  let component: BotTestingComponent;
  let fixture: ComponentFixture<BotTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
