import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-question-list-view',
  templateUrl: './article-question-list-view.component.html',
  styleUrls: ['./article-question-list-view.component.scss']
})
export class ArticleQuestionListViewComponent implements OnInit {

  constructor() { }
  @Input() corpus ;
  @Output() removeFilterItemByIdEvent = new EventEmitter();
  @Input() filter_categorie_id_list:string[];
  sort_articals_by: string = 'updated_at';
  
  removeFilterItemById(id){
    this.removeFilterItemByIdEvent.emit(id);
  }
  ngOnInit() {
  }

}
