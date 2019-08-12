import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ICurationIssuesAggregation, ICurationItem} from "../../../../interfaces/faqbots";

@Component({
  selector: 'app-curation-issues-aggregation-bar',
  templateUrl: './curation-issues-aggregation-bar.component.html',
  styleUrls: ['./curation-issues-aggregation-bar.component.scss']
})
export class CurationIssuesAggregationBarComponent implements OnInit {

  constructor() { }
@Input() aggrigationData : ICurationIssuesAggregation ;
@Input() reloading: boolean;
@Output() filterArticleWithTriggeredRule$ = new EventEmitter();
  ngOnInit() {
    
  }
  
  filterArticleWithTriggeredRule(filterToken){
    this.filterArticleWithTriggeredRule$.emit(filterToken);
  }
}
