import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';
import {TempVariableService} from '../../../../temp-variable.service';
import {ActivatedRoute, Router} from '@angular/router';
import { EAllActions } from 'src/app/typings/enum';

import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import {UtilityService} from 'src/app/utility.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-curation-issues',
  templateUrl: './curation-issues.component.html',
  styleUrls: ['./curation-issues.component.scss']
})
export class CurationIssuesComponent implements OnInit {



  constructor(
    private constantsService : ConstantsService,
    private router : Router,
    private activatedRoute : ActivatedRoute,

    private utilityService: UtilityService,
    private matDialog: MatDialog,
    ) { }
  @Input() bot: IBot;
  @Input() isResolved:boolean;
  @Input() curationItemData : ICurationItem;
  @Output() ignoreQueryEvent = new EventEmitter();
  @Output() addQueryToArticleEvent = new EventEmitter();
  myEAllActions = EAllActions;
  articleSearchMode = false;
  selectedArticleToAddCuration : number;

  selectedArticleFirstQuestion : number;
  dialogRefWrapper = {ref: null};

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
  addIssueToNewArticle(){
    TempVariableService.firstQuestionListForNewArticle = [this.curationItemData.user_message];
    TempVariableService.curationIds = [this.curationItemData.id];
    this.router.navigate(['.'], {
      queryParams: { build:'articles' ,section_id:null},
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
  })
  }
  addIssueToThisArticle(){

    this.addQueryToArticleEvent.emit(
      {
        section_id: this.selectedArticleToAddCuration,
        curationItemId: this.curationItemData.id,
      }
    )
  }






  async openCloseWithoutSavingModal() {

    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr:'danger-modal-header-border',
      data:{
        actionButtonText:"Close without saving",
        message: "Selected issue is not yet resolved, do you wish to continue?",
        title:`Close without saving?`,
        isActionButtonDanger:true,
        inputDescription: null,
        closeButtonText: "Keep editing"
      },
      dialog: this.matDialog,
      component:ModalConfirmComponent
    }).then((data)=>{
  
      if(data){
        this.articleSearchMode = false;
        this.selectedArticleToAddCuration = null;
        this.selectedArticleFirstQuestion=null;
        
      }
    })
  }


}
