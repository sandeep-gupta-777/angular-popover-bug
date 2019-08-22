import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ConstantsService} from 'src/app/constants.service';
import {ICurationItem} from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';
import {TempVariableService} from '../../../../temp-variable.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EAllActions} from 'src/app/typings/enum';
import {ISessionItem, ISessions} from 'src/interfaces/sessions';
import {Observable} from 'rxjs';
import {ServerService} from 'src/app/server.service';
import {UtilityService} from 'src/app/utility.service';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {IHeaderData} from 'src/interfaces/header-data';
import {BotSessionSmartTableModal} from '../../bot-sessions/bot-session-smart-table-modal';


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
    private serverService: ServerService,
    private utilityService: UtilityService,
    private matDialog: MatDialog
  ) {
  }

  @Input() bot: IBot;
  @Input() isResolved: boolean;
  @Input() curationItemData: ICurationItem;
  @Input() selected: boolean = false;
  @Output() ignoreQueryEvent = new EventEmitter();
  @Output() addQueryToArticleEvent = new EventEmitter();

  @ViewChild('sessionDetailTemplate') sessionDetailTemplate: TemplateRef<any>;

  myEAllActions = EAllActions;
  articleSearchMode = false;
  selectedArticleToAddCuration: number;
  indexOfCurrentRowSelected: number;
  sessionsSmartTableDataModal: BotSessionSmartTableModal;

  selectedArticleFirstQuestion: number;
  dialogRefWrapper = {ref: null};
  selectedRow_Session: ISessionItem;
  sessions: ISessionItem[] = [];
  url: string;
  sessionItemToBeDecrypted: ISessionItem;

  // sessionitem: string;

  ngOnInit() {
  }

  channelNameToImg(channel: string) {
    let iconObj = this.constantsService.getIntegrationIconForChannelName(
      channel
    );
    return iconObj && iconObj.icon;
  }

  toDisplayValue(value: string) {
    var pieces = value.split('_');
    for (var i = 0; i < pieces.length; i++) {
      var j = pieces[i].charAt(0).toUpperCase();
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
    TempVariableService.firstQuestionListForNewArticle = [
      this.curationItemData.user_message
    ];
    TempVariableService.curationIds = [this.curationItemData.id];
    this.router.navigate(['.'], {
      queryParams: {build: 'articles', section_id: null},
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    });
  }

  addIssueToThisArticle() {
    this.addQueryToArticleEvent.emit({
      section_id: this.selectedArticleToAddCuration,
      curationItemId: [this.curationItemData.id]
    });
  }


  curationIssueIconClicked(roomId) {
    //
    let isEncrypted: boolean;

    // No need of calling decrypt as curation window will not show any issue if encrypted

    if (roomId.data_encrypted) {

      this.openSessionRowDecryptModal(roomId);
    } else {
      this.selectedRow_Session = <any>{id: roomId};
      this.openDeleteTemplateKeyModal(this.sessionDetailTemplate);
    }

  }

  openSessionRowDecryptModal(sessionToBeDecryptedId) {
    this.sessionItemToBeDecrypted.id = sessionToBeDecryptedId;
    // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.utilityService
      .openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr: 'danger-modal-header-border',
        data: {
          actionButtonText: `Decrypt`,
          message: 'Use the decryption key to see all the messages exchanged.',
          title: `Decrypt session`,
          isActionButtonDanger: false,
          inputDescription: 'Key'
        },
        dialog: this.matDialog,
        component: ModalConfirmComponent
      })
      .then(data => {
        if (data) {
          this.decryptSubmit(this.sessionItemToBeDecrypted.id, data);
        }
      });
  }

  loadSessionMessagesById(id) {
    this.url = this.constantsService.getSessionsMessageUrl(id);
    return this.serverService.makeGetReq<ISessionItem>({
      url: this.url,
      headerData: {'bot-access-token':  ServerService.getBotTokenById(this.bot.id),}
    });
  }

  async openDeleteTemplateKeyModal(tempKey) {
    let closeDialogPromise$ = this.utilityService.openDialog({
      dialog: this.matDialog,
      component: this.sessionDetailTemplate,
      data: {
        title: `Delete template key: ${tempKey}?`,
        message:
          'This action cannot be undone. Are you sure you wish to delete?',
        actionButtonText: 'Delete',
        isActionButtonDanger: true
      },
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'modal-xlg'
    });
    let data = await closeDialogPromise$;
  }

  decryptSubmit(sessionTobeDecryptedId: number, decryptReason) {
    const headerData: IHeaderData = {
      'bot-access-token':  ServerService.getBotTokenById(this.bot.id)
    };
    const body = {
      room_id: sessionTobeDecryptedId,
      decrypt_audit_type: 'room',
      message: decryptReason
    };
    const url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({headerData, body, url}).subscribe(() => {
      const surl = this.constantsService.getSessionsByIdUrl(
        sessionTobeDecryptedId
      );
      this.serverService
        .makeGetReq({url: surl, headerData})
        .subscribe((value: { objects: ISessionItem[] }) => {
          let newSession = value.objects[0];
          /*todo: use perform search in db instead*/
          const del = this.sessions.findIndex(
            session => session.id === sessionTobeDecryptedId
          );
          this.sessions[del] = { ...newSession };
          this.sessions = [...this.sessions];
          // this._tableData = this.transformSessionDataForMaterialTable(this.sessions);
          this.sessionsSmartTableDataModal.refreshData(this.sessions);

          this.selectedRow_Session = newSession;
          this.openDeleteTemplateKeyModal(this.sessionDetailTemplate);
        });
    });
    this.dialogRefWrapper.ref.close();
  }

}
