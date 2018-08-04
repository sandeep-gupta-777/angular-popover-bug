import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDetailHeaderComponent } from './bot-detail-header.component';

describe('BotDetailHeaderComponent', () => {
  let component: BotDetailHeaderComponent;
  let fixture: ComponentFixture<BotDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
