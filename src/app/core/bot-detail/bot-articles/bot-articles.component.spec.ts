import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotArticlesComponent } from './bot-articles.component';

describe('BotArticlesComponent', () => {
  let component: BotArticlesComponent;
  let fixture: ComponentFixture<BotArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
