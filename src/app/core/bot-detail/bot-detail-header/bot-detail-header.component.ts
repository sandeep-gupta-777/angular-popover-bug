import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {ConstantsService} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {EBotType, UtilityService} from '../../../utility.service';
import {UpdateBotInfoByIdInBotInBotList} from '../../view-bots/ngxs/view-bot.action';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {LoggingService} from '../../../logging.service';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';
import {MatDialog} from '@angular/material';
import {ModalImplementer} from '../../../modal-implementer';
import {EventService} from '../../../event.service';
import {SideBarService} from 'src/app/side-bar.service';
import {EAllActions, ESideBarTab} from '../../../typings/enum';
import {ChatService} from 'src/app/chat.service';

@Component({
  selector: 'app-bot-detail-header',
  templateUrl: './bot-detail-header.component.html',
  styleUrls: ['./bot-detail-header.component.scss']
})
export class BotDetailHeaderComponent extends ModalImplementer implements OnInit {

  @Input() bot: IBot;
  myEBotType = EBotType;
  myObject = Object;
  myEAllActions = EAllActions;
  showSpinIcon = false;
  @Output() refreshBotDetails$ = new EventEmitter();
  enterprise_unique_name;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  dialogRefWrapper = {ref: null};

  myESideBarTab = ESideBarTab;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private router: Router,
    public matDialog: MatDialog,
    public  utilityService: UtilityService,
    private constantsService: ConstantsService,
    private chatService: ChatService,
  ) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
    });

    EventService.updateBotinit$.subscribe(() => {
      this.updateBot();
    });

  }


  previewBot() {
    this.chatService.openPreviewFormService(this.bot, this.enterprise_unique_name);
    // this.store.dispatch([
    //   new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
    //     bot: {...this.bot, enterprise_unique_name: this.enterprise_unique_name}
    //   }),
    //   new ToggleChatWindow({open: true}),
    //   new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})
    // ]);

    // /*TODO: integrate this with store*/
    // EventService.startANewChat$.emit({bot:this.bot, consumerDetails: {uid: this.utilityService.createRandomUid()},
    // });

  }

  /*TODO: remove it*/
  updateBot() {

    try {
      this.dialogRefWrapper.ref.close();
    } catch (e) {
      LoggingService.error(e);
    }
    this.bot.active_version_id = this.bot.store_selected_version;
    const bot = this.utilityService.performFormValidationBeforeSaving(this.bot);
    if (!bot) {
      return;
    }

    const url = this.constantsService.updateBotUrl(this.bot.id);
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    if (this.bot.store_selected_version && this.bot.store_selected_version !== this.bot.active_version_id) {
      if (!confirm('active Versions has been changed')) {
        return;
      }
      this.bot.active_version_id = this.bot.store_selected_version;
    }
    const body: any = this.constantsService.updateBotSerializer(this.bot);

    this.serverService.makePutReq({url, body, headerData})
      .subscribe((updatedBot: IBot) => {

          EventService.botUpdatedInServer$.emit(updatedBot);
          this.store.dispatch([
            new UpdateBotInfoByIdInBotInBotList({botId: this.bot.id, data: updatedBot})
          ]);
          this.utilityService.showSuccessToaster('Bot updated');
        },
        err => {

          EventService.codeValidationErrorOnUpdate$.emit(err.error);
          console.log('emited this :::::::::::::', err.error);
        });
  }

  refreshBotDetails() {
    this.showSpinIcon = true;
    setTimeout(() => {
      this.showSpinIcon = false;
    }, 2000);
    this.refreshBotDetails$.emit();
  }

  deleteBot() {
    const url = this.constantsService.getDeleteBotUrl(this.bot.id);
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeDeleteReq({url, headerData})
      .subscribe((value) => {
        this.serverService.getNSetBotList()
          .subscribe(() => {
            this.router.navigate(['']);
            this.utilityService.showSuccessToaster('Bot deleted');
          });
      });
  }

  openActiveBotChangedModal(template: TemplateRef<any>) {

    if (this.bot.store_selected_version && this.bot.store_selected_version !== this.bot.active_version_id) {

      const selectedVersion = this.bot.store_bot_versions.find(value => value.id === this.bot.store_selected_version);
      if (selectedVersion.changed_fields['df_template'] ||
        selectedVersion.changed_fields['df_rules'] ||
        selectedVersion.changed_fields['generation_rules'] ||
        selectedVersion.changed_fields['generation_templates'] ||
        selectedVersion.changed_fields['workflow']) {
        this.utilityService.openDialog({
          dialogRefWrapper: this.dialogRefWrapper,
          classStr: 'danger-modal-header-border',
          data: {
            actionButtonText: 'Activate with last saved data',
            message: 'The Versions you are trying to make active contains unsaved changes.Do you want to use the last saved data of this Versions?',
            title: 'Activate code Versions',
            isActionButtonDanger: true
          },
          dialog: this.matDialog,
          component: ModalConfirmComponent
        }).then((data) => {
          if (data) {
            this.updateBot();
          }
        });
      } else {
        this.utilityService.openDialog({
          dialogRefWrapper: this.dialogRefWrapper,
          classStr: 'danger-modal-header-border',
          data: {
            actionButtonText: 'Update',
            message: 'If you update the bot your currently selected Versions will be the new Active Versions.',
            title: 'Active Versions changed',
            isActionButtonDanger: true
          },
          dialog: this.matDialog,
          component: ModalConfirmComponent
        }).then((data) => {
          if (data) {
            this.updateBot();
          }
        });
      }
    } else {
      this.updateBot();
    }
  }

  async openDeleteModal() {

    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Delete bot',
        message: 'This action cannot be undone. Are you sure you wish to delete?',
        title: `Delete ${this.bot.name}?`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: 'Keep bot'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {

      if (data) {
        this.deleteBot();
      }
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }

  goBackToDashboard() {
    if (SideBarService.isTabDirty(SideBarService.activeTab)) {
      this.utilityService.openCloseWithoutSavingModal(this.dialogRefWrapper, this.matDialog)
        .then((data) => {
          if (data) {
            this.router.navigate(['/'], {queryParams: {type: this.bot.bot_type}});
          }
        });

    } else {
      this.router.navigate(['/'], {queryParams: {type: this.bot.bot_type}});
    }

  }

  openAnalyticsForBot() {
    if (SideBarService.isTabDirty(SideBarService.activeTab)) {
      this.utilityService.openCloseWithoutSavingModal(this.dialogRefWrapper, this.matDialog)
        .then((data) => {
          if (data) {
            this.router.navigate(['/core/analytics2/overview'], {queryParams: {bot_id: this.bot.id}});

          }
        });

    } else {
      this.router.navigate(['/core/analytics2/overview'], {queryParams: {bot_id: this.bot.id}});
    }
  }

  copySharablePreviewLinkHandler() {
    this.utilityService.copyToClipboard(`${location.host}${ConstantsService.fullscreenchatpath_anon}/?bot_unique_name=${this.bot.bot_unique_name}&enterprise_unique_name=${this.enterprise_unique_name}`);
  }
}
