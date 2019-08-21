import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurationIssuesAggregation} from '../../../interfaces/faqbots';
import {ESplashScreens} from '../../../../splash-screen/splash-screen.component';

@Component({
  selector: 'app-curation-overview',
  templateUrl: './curation-overview.component.html',
  styleUrls: ['./curation-overview.component.scss']
})
export class CurationOverviewComponent implements OnInit {

  constructor() { }
  @Input() issuesAggrigationData: ICurationIssuesAggregation;
  @Input() TopArticlesWithIssues: any[];
  @Input() reloading: boolean;
  @Output() resolveArticleWithTopIssues$ = new EventEmitter();
  @Output() filterArticleWithTriggeredRule$ = new EventEmitter();
  myESplashScreens = ESplashScreens;
  ngOnInit() {

  }
  resolveArticleWithTopIssues(section) {
    this.resolveArticleWithTopIssues$.emit(section);
  }

  filterArticleWithTriggeredRule(filterToken){
    this.filterArticleWithTriggeredRule$.emit(filterToken);
  }

}
