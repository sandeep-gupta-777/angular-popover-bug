import { Component, OnInit, Input } from '@angular/core';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-curation-resolved-list',
  templateUrl: './curation-resolved-list.component.html',
  styleUrls: ['./curation-resolved-list.component.scss']
})
export class CurationResolvedListComponent implements OnInit {

  constructor() { }
  @Input() curationItemList : ICurationItem[];
  ngOnInit() {
  }

}
