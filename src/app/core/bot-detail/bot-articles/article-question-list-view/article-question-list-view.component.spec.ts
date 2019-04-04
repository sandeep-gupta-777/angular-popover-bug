import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleQuestionListViewComponent } from './article-question-list-view.component';

describe('ArticleQuestionListViewComponent', () => {
  let component: ArticleQuestionListViewComponent;
  let fixture: ComponentFixture<ArticleQuestionListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleQuestionListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleQuestionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
