import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotArticleHistoryComponent } from './bot-article-history.component';

describe('BotArticleHistoryComponent', () => {
  let component: BotArticleHistoryComponent;
  let fixture: ComponentFixture<BotArticleHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotArticleHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotArticleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
