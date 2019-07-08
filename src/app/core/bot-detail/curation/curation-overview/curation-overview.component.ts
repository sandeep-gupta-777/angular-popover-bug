import { Component, OnInit } from '@angular/core';
import {ICurationIssuesAggregation} from "../../../interfaces/faqbots";

@Component({
  selector: 'app-curation-overview',
  templateUrl: './curation-overview.component.html',
  styleUrls: ['./curation-overview.component.scss']
})
export class CurationOverviewComponent implements OnInit {

  constructor() { }
  issuesAggrigationData: ICurationIssuesAggregation;
  ngOnInit() {
    this.issuesAggrigationData= {
      "aggregation_counts": {
        "agent_handover": 45,
        "downvoted": 20,
        "fallback": 70,
        "from_session": 10,
        "low_confidence": 10,
        "partial_match": 10
      },
      "today_count": 10,
      "total_count": 130
    }
  }

}
