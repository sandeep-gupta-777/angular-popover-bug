import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurationIssuesAggregation} from "../../../interfaces/faqbots";

@Component({
  selector: 'app-curation-overview',
  templateUrl: './curation-overview.component.html',
  styleUrls: ['./curation-overview.component.scss']
})
export class CurationOverviewComponent implements OnInit {

  constructor() { }
  @Input() issuesAggrigationData: ICurationIssuesAggregation;
  @Input() TopArticlesWithIssues : any[];
  @Output() resolveArticleWithTopIssues$ = new EventEmitter();
  ngOnInit() {
   
  }
  resolveArticleWithTopIssues(section){
    this.resolveArticleWithTopIssues$.emit(section);
  }

}
