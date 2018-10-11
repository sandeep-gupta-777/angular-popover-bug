import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotArchitetureComponent } from './bot-architeture.component';

describe('BotArchitetureComponent', () => {
  let component: BotArchitetureComponent;
  let fixture: ComponentFixture<BotArchitetureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotArchitetureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotArchitetureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
