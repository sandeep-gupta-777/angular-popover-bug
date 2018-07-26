import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotPreviewCardComponent } from './bot-preview-card.component';

describe('BotPreviewCardComponent', () => {
  let component: BotPreviewCardComponent;
  let fixture: ComponentFixture<BotPreviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotPreviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
