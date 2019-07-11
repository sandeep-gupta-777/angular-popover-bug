import { Component, OnInit, Input } from '@angular/core';
import { ICurationResolvedAggregation } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-curation-resolved-aggrigation',
  templateUrl: './curation-resolved-aggrigation.component.html',
  styleUrls: ['./curation-resolved-aggrigation.component.scss']
})
export class CurationResolvedAggrigationComponent implements OnInit {

  constructor() { }
  @Input() aggrigationData: ICurationResolvedAggregation;
  ngOnInit() {

  }

}
