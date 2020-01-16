import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICurationItem} from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';
import {UtilityService} from '../../../../utility.service';
import {ModalConfirmComponent} from '../../../../modal-confirm/modal-confirm.component';
import {ServerService} from '../../../../server.service';
import {ConstantsService} from '../../../../constants.service';
import {IHeaderData} from '../../../../../interfaces/header-data';
import {MatDialog} from '@angular/material';
import {map} from 'rxjs/internal/operators';
import {ESplashScreens} from 'src/app/splash-screen/splash-screen.component';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TempVariableService} from '../../../../temp-variable.service';
import {EAllActions} from '../../../../typings/enum';
import {FormsService} from '../../../../forms.service';
import {IIntent} from "../../../../typings/intents";
import {IEntitiesItem} from "../../../interfaces/mlBots";
import {MlService} from "../../ml-model/ml.service";
import {EventService} from "../../../../event.service";

@Component({
  selector: 'app-curation-issues-list',
  templateUrl: './curation-issues-list.component.html',
  styleUrls: ['./curation-issues-list.component.scss']
})
export class CurationIssuesListComponent implements OnInit {
  myEAllActions = EAllActions;

  constructor(
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  @Input() curationItemList: ICurationItem[];
  @Input() isMorePresent: boolean;
  @Input() isMlBot: boolean;
  @Input() bot: IBot;
  @Output() loadMoreNext = new EventEmitter();
  @Output() ignoreCurationIssueById = new EventEmitter();
  @Output() addQueryToArticleByIds = new EventEmitter();
  @Output() addQueryToIntentEvent = new EventEmitter();
  @Input() reloadingMore: boolean;
  @Input() liveBotUpdatedAt: number;
  @ViewChild('issuesSelectedListForm') SelectedListForm: NgForm;
  IssuesSelectedSet = [];
  articleSearchMode = false;
  dialogRefWrapper = {ref: null};
  @Input() corpusState: string;
  myESplashScreens = ESplashScreens;
  selectedArticleToAddCuration: number;
  @Input() totallength: number;
  @Input() mlIntentList: IIntent[] = [];
  selectedIntent: IIntent;
  @Input() entityList: IEntitiesItem[];
  intentInputForm: FormGroup;

  ngOnInit() {

    this.SelectedListForm.form.valueChanges
      .subscribe((val) => {
        const temArray = new Set();
        const keys = Object.keys(val);
        for (const i of keys) {
          if (val[i] === true) {
            temArray.add(parseInt(i, 10));
          }
        }
        this.IssuesSelectedSet = Array.from(temArray);
      });

    this.intentInputForm = this.formBuilder.group({
      utterances: [[{'entities': [], 'utterance': 'edit utterance'}], function (formControl: FormControl) {
        // if (formControl.value) {
        if (!formControl.value[0].utterance) {
          return {
            error: {
              message: 'Cant be empty'
            }
          };
        }
        // }
      }],
    });
    this.setMLEntityList();
  }

  appEntityMarkingUpdate(){
    EventService.appEntityMarkingUpdate$.emit();
  }
  setMLEntityList() {
    const url = this.constantsService.getEntityList();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    // let colorList = JSON.parse(JSON.s);
    this.serverService.makeGetReq({url, headerData}).subscribe((value) => {
      this.entityList = value.objects;
      MlService.entityList = this.entityList;
    });
  }

  load10More() {

    this.loadMoreNext.emit();
  }

  ignoreIt(curationIds) {
    this.ignoreCurationIssueById.emit(curationIds);
  }

  addQueryToArticle(body) {
    this.addQueryToArticleByIds.emit(body);
  }

  openTrainModal() {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: `Continue`,
        message: 'Leave a comment about why you are training the bot so that it can be tracked in the bot’s history.',
        title: `Train knowledge base`,
        isActionButtonDanger: false,
        //inputDescription: 'Comment',
// asdasdasd
        formGroup: this.formBuilder.group({
          inputData: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
            min: 1,
            max: 2000
          })]]
        })
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        // this.decryptSubmit()

        this.trainCorpus(data);
      }
    });
  }


  trainCorpus$(description) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };

    const body = {
      'bot_id': this.bot.id,
      'description': description
    };

    const url = this.constantsService.corpusTrainUrl();
    return this.serverService.makePostReq<any>({headerData, body, url});
  }

  trainCorpus(data) {
    this.trainCorpus$(data).subscribe((val) => {
      this.utilityService.showSuccessToaster(val.message);
    });
  }


  // added multi to curation
  ignoreMultiQuery() {
    this.ignoreCurationIssueById.emit(this.IssuesSelectedSet);
  }

  clickedOnArticle(val) {
    if (val && val.section_id) {
      this.selectedArticleToAddCuration = val.section_id;
    }
  }

  toDisplayValue(value: string) {
    var pieces = value.split('_');
    for (var i = 0; i < pieces.length; i++) {
      var j = pieces[i].charAt(0).toUpperCase();
      pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(' ');
  }

  addMultiIssueToNewArticle() {
    let user_message_list = this.curationItemList.filter((item) => {
      return !!(this.IssuesSelectedSet.find(c_id => c_id === item.id));
    }).map(a => a.user_message);
    user_message_list = Array.from(new Set(user_message_list));
    TempVariableService.firstQuestionListForNewArticle = user_message_list;
    TempVariableService.curationIds = this.IssuesSelectedSet;
    this.router.navigate(['.'], {
      queryParams: {build: 'articles', section_id: null},
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    });
  }

  addMultiIssueToThisArticle() {
    this.addQueryToArticleByIds.emit(
      {
        section_id: this.selectedArticleToAddCuration,
        curationItemId: this.IssuesSelectedSet,
      }
    );
    this.articleSearchMode = false;
    this.selectedArticleToAddCuration = null;
  }

  addMultiIssueToThisIntent(data) {
    if(!data){
      this.appEntityMarkingUpdate();
      this.addQueryToIntentEvent.emit({
        data: {"type": "link",intent_id:this.selectedIntent.intent_id,...this.intentInputForm.value},
        curation_id_list: this.IssuesSelectedSet
      });
    }else{
      this.addQueryToIntentEvent.emit(data);
    }
  }
}
