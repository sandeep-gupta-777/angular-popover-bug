import { Component, OnInit, Input } from '@angular/core';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-curation-issues-list',
  templateUrl: './curation-issues-list.component.html',
  styleUrls: ['./curation-issues-list.component.scss']
})
export class CurationIssuesListComponent implements OnInit {

  constructor() { }
  @Input() curationItemList:ICurationItem[]
  ngOnInit() {
  }

}
