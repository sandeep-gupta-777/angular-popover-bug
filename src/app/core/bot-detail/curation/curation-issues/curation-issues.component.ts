import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';

@Component({
  selector: 'app-curation-issues',
  templateUrl: './curation-issues.component.html',
  styleUrls: ['./curation-issues.component.scss']
})
export class CurationIssuesComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    ) { }
  @Input() bot: IBot;
  @Input() isResolved:boolean;
  @Input() curationItemData : ICurationItem;
  @Output() ignoreQueryEvent = new EventEmitter();
  @Output() addQueryToArticleEvent = new EventEmitter();
  articleSearchMode = false;
  selectedArticleToAddCuration : number;
  ngOnInit() {
  }
  channelNameToImg(channel:string){
    let iconObj = this.constantsService.getIntegrationIconForChannelName(channel);
    return iconObj && iconObj.icon;
  }
  toDisplayValue(value:string){
    var pieces = value.split("_");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
  }
  ignoreQuery(curationItemId){
    this.ignoreQueryEvent.emit(curationItemId);
  }
  clickedOnArticle(section_id){
    if(section_id){
      this.selectedArticleToAddCuration = section_id;
    }
  }
  addIssueToThisArticle(){

    this.addQueryToArticleEvent.emit(
      {
        section_id: this.selectedArticleToAddCuration,
        curationItemId: this.curationItemData.id,
      }
    )
  }
}
