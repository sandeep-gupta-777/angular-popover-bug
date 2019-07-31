import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ICorpus, IArticleItem } from 'src/app/core/interfaces/faqbots';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-article-question-list-view',
  templateUrl: './article-question-list-view.component.html',
  styleUrls: ['./article-question-list-view.component.scss']
})
export class ArticleQuestionListViewComponent implements OnInit {

  constructor() { }
  @Input() corpus: ICorpus;
  @Output() removeFilterItemByIdEvent = new EventEmitter();
  @Output() articleListItemClicked = new EventEmitter();
  @Input() filter_categorie_id_list: string[];
  currentPage = 0;
  @Input() set _currentPage(val) {

    this.currentPage = val;
  }
  sort_articals_by = 'updated_at';
  // paginator: MatPaginator;

  removeFilterItemById(id) {
    this.currentPage = 0;
    this.removeFilterItemByIdEvent.emit(id);
    // this.paginator.firstPage();
  }
  listItemClicked(sectionData: IArticleItem) {
    this.articleListItemClicked.emit(sectionData);
  }
  goToPage(val) {

    this.currentPage = val.pageIndex;
  }
  ngOnInit() {
  }

}
