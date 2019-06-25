import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';

@Component({
  selector: 'app-curation-issues-list',
  templateUrl: './curation-issues-list.component.html',
  styleUrls: ['./curation-issues-list.component.scss']
})
export class CurationIssuesListComponent implements OnInit {

  constructor() { }
  @Input() curationItemList:ICurationItem[];
  @Input() isMorePresent:boolean;
  @Input() bot: IBot;
  @Output() loadMoreNext = new EventEmitter();
  @Output() ignoreCurationIssueById = new EventEmitter();
  @Output() addQueryToArticleByIds = new EventEmitter();
  ngOnInit() {
  }
  load10More(){
    debugger;
    this.loadMoreNext.emit();
  }
  ignoreIt(curationId){
    this.ignoreCurationIssueById.emit(curationId);
  }
  addQueryToArticle(body){
    this.addQueryToArticleByIds.emit(body);
  }
}
