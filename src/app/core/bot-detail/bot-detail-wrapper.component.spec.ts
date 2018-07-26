import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDetailWrapperComponent } from './bot-detail-wrapper.component';

describe('BotDetailWrapperComponent', () => {
  let component: BotDetailWrapperComponent;
  let fixture: ComponentFixture<BotDetailWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotDetailWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
