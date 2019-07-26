import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-curation-resolved-list',
  templateUrl: './curation-resolved-list.component.html',
  styleUrls: ['./curation-resolved-list.component.scss']
})
export class CurationResolvedListComponent implements OnInit {

  constructor() { }
  
  @Input() curationItemList : ICurationItem[];
  @Input() isMorePresent:boolean;
  @Output() loadMoreNext = new EventEmitter();
  @Input() totallength: number;
  @Input() reloadingMore: boolean;
  @Input() liveBotUpdatedAt: number;
  ngOnInit() {
  }
  load10More(){
    this.loadMoreNext.emit();
  }
}