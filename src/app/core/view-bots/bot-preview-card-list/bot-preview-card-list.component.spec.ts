import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotPreviewCardListComponent } from './bot-preview-card-list.component';

describe('BotPreviewCardListComponent', () => {
  let component: BotPreviewCardListComponent;
  let fixture: ComponentFixture<BotPreviewCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotPreviewCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotPreviewCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
