import {Component, Input, OnInit} from '@angular/core';
import {ICurationIssuesAggregation} from '../../../../interfaces/faqbots';

@Component({
  selector: 'app-curation-issues-aggregation-bar',
  templateUrl: './curation-issues-aggregation-bar.component.html',
  styleUrls: ['./curation-issues-aggregation-bar.component.scss']
})
export class CurationIssuesAggregationBarComponent implements OnInit {

  constructor() { }
@Input() aggrigationData: ICurationIssuesAggregation ;
  ngOnInit() {
  }

}
