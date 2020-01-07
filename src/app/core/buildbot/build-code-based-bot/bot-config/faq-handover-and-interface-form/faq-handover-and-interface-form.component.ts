import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EBotType, UtilityService} from 'src/app/utility.service';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {MatDialog} from '@angular/material';
import {ServerService} from 'src/app/server.service';
import {IHeaderData} from 'src/interfaces/header-data';
import {IBot} from 'src/app/core/interfaces/IBot';
import {ConstantsService} from 'src/app/constants.service';
import {UpdateBotInfoByIdInBotInBotList} from 'src/app/core/view-bots/ngxs/view-bot.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-faq-handover-and-interface-form',
  templateUrl: './faq-handover-and-interface-form.component.html',
  styleUrls: ['./faq-handover-and-interface-form.component.scss']
})
export class FaqHandoverAndInterfaceFormComponent implements OnInit {
  dialogRefWrapper = {ref: null};


  @Input() formGroup: FormGroup;
  @Input() bot: IBot;
  @Input() disableAgentToggleBAD: boolean;
  agentHandover: boolean;

  constructor(
    private utilityService: UtilityService,
    public matDialog: MatDialog,
    public serverService: ServerService,
    public constantsService: ConstantsService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    if(this.bot.bot_type === EBotType.faqbot){
      this.agentHandover = this.bot.allow_agent_handover;
      this.disableOrEnableAll(this.agentHandover);
    }
    else{
      this.agentHandover = false;
      this.disableOrEnableAll(false);
    }
  }

  async openAgentHandover() {
    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Continue',
        message: 'Triggering agent handover requires you to train the knowledge base again. Do you want to continue?',
        title: `Trigger agent handover`,
        isActionButtonDanger: false,
        inputDescription: null,
        closeButtonText: 'Cancel'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.makeAgentHandoverRequest()
          .subscribe(() => {

            this.agentHandover = !this.agentHandover;
            this.disableOrEnableAll(this.agentHandover);
            this.store.dispatch(new UpdateBotInfoByIdInBotInBotList({
              data: {allow_agent_handover: this.agentHandover},
              botId: this.bot.id
            }));
          });
      }
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }

  makeAgentHandoverRequest() {

    const updateAgentHandoverUrl = this.constantsService.getUpdateAgentHandoverUrl();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot),
    };
    const body = {
      'allow_agent_handover': !this.agentHandover
    };
    return this.serverService.makePostReq({url: updateAgentHandoverUrl, body, headerData});
  }

  disableAgentHandoverChildren(formName: string, enableValue: boolean) {
    const x: any = this.formGroup.get('agent_handover_setting').get(formName);
    this.toggleDisableFormControl(x.get('value'), enableValue);
  }

  disableOrEnableAll(enbleValue) {
    this.disableAgentHandoverChildren('consecutive_count', enbleValue && this.formGroup.get('agent_handover_setting').get('consecutive_count').value.enabled);
    this.disableAgentHandoverChildren('partial_match_count', enbleValue && this.formGroup.get('agent_handover_setting').get('partial_match_count').value.enabled);
    this.disableAgentHandoverChildren('fallback_count', enbleValue && this.formGroup.get('agent_handover_setting').get('fallback_count').value.enabled);
  }

  toggleDisableFormControl(f: FormControl, enableValue: boolean) {
    if (!enableValue) {
      f.disable();
    } else {
      f.enable();
    }

  }
}
