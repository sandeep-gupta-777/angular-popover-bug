import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ConstantsService} from 'src/app/constants.service';
import {ICurationItem} from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';
import {TempVariableService} from '../../../../temp-variable.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EAllActions} from 'src/app/typings/enum';


@Component({
  selector: 'app-curation-issues',
  templateUrl: './curation-issues.component.html',
  styleUrls: ['./curation-issues.component.scss']
})
export class CurationIssuesComponent implements OnInit {


  constructor(
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  @Input() bot: IBot;
  @Input() isResolved: boolean;
  @Input() curationItemData: ICurationItem;
  @Input() selected = false;
  @Output() ignoreQueryEvent = new EventEmitter();
  @Output() addQueryToArticleEvent = new EventEmitter();
  myEAllActions = EAllActions;
  articleSearchMode = false;
  selectedArticleToAddCuration: number;

  selectedArticleFirstQuestion: number;
  dialogRefWrapper = {ref: null};

  ngOnInit() {
  }

  channelNameToImg(channel: string) {
    const iconObj = this.constantsService.getIntegrationIconForChannelName(channel);
    return iconObj && iconObj.icon;
  }

  toDisplayValue(value: string) {
    const pieces = value.split('_');
    for (let i = 0; i < pieces.length; i++) {
      const j = pieces[i].charAt(0).toUpperCase();
      pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(' ');
  }

  ignoreQuery(curationItemId) {
    this.ignoreQueryEvent.emit([curationItemId]);
  }

  clickedOnArticle(val) {
    if (val && val.section_id) {
      this.selectedArticleToAddCuration = val.section_id;
    }
  }

  addIssueToNewArticle() {
    TempVariableService.firstQuestionListForNewArticle = [this.curationItemData.user_message];
    TempVariableService.curationIds = [this.curationItemData.id];
    this.router.navigate(['.'], {
      queryParams: {build: 'articles', section_id: null},
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    });
  }

  addIssueToThisArticle() {

    this.addQueryToArticleEvent.emit(
      {
        section_id: this.selectedArticleToAddCuration,
        curationItemId: [this.curationItemData.id],
      }
    );
  }

}
