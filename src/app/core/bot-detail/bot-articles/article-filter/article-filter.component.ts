import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICategoryMappingItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})
export class ArticleFilterComponent implements OnInit {

  constructor() { }
  @Input() categoryMapping: ICategoryMappingItem[];
  @Input() articleFilterForm: FormGroup;
  @Output() filterCategory = new EventEmitter();
  filter_categorie_search: string = '';

  changedFilterList(value) {
    this.filterCategory.emit(value);
  }
  clearFilterList() {
    this.articleFilterForm.reset();
    this.filterCategory.emit(this.articleFilterForm);
  }
  isNothingSelected() {
    let i = true;
    for (var key in this.articleFilterForm.value) {
      if (this.articleFilterForm.value[key] == true) {
        i = false;
      }
    };
    return i;
  }
  isAllHidden() {
    let i = true;
    this.categoryMapping.forEach(c => {
      if(c.name.includes(this.filter_categorie_search)){
        i = false;
      }
    });
    return i;
  }
  ngOnInit() {
  }

}