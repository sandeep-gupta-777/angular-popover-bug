import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilityService } from 'src/app/utility.service';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import { MatDialog } from '@angular/material';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from 'src/app/core/interfaces/IBot';
import { ConstantsService } from 'src/app/constants.service';

@Component({
  selector: 'app-faq-handover-and-interface-form',
  templateUrl: './faq-handover-and-interface-form.component.html',
  styleUrls: ['./faq-handover-and-interface-form.component.scss']
})
export class FaqHandoverAndInterfaceFormComponent implements OnInit {

  constructor(
    private utilityService : UtilityService,
    public matDialog:MatDialog,
    public serverService:ServerService,
    public constantsService:ConstantsService
  ) { }
  @Input() formGroup: FormGroup;
  @Input() bot:IBot;
  agentHandover:boolean;
  ngOnInit() {
    this.agentHandover = this.bot.allow_agent_handover;
  }
  dialogRefWrapper = {ref:null};
  async openAgentHandover() {
  await this.utilityService.openDialog({
    dialogRefWrapper: this.dialogRefWrapper,
    classStr:'danger-modal-header-border',
    data:{
      actionButtonText:"Continue",
      message: "Triggering agent handover requires you to train the knowledge base again. Do you want to continue?",
      title:`Trigger agent handover`,
      isActionButtonDanger:false,
      inputDescription: null,
      closeButtonText: "Cancel"
    },
    dialog: this.matDialog,
    component:ModalConfirmComponent
  }).then((data)=>{
    if(data){
      this.makeAgentHandoverRequest()
        .subscribe(()=>{

          this.agentHandover = !this.agentHandover;
        })
    }
  })
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }
  makeAgentHandoverRequest(){
    const updateAgentHandoverUrl = this.constantsService.getUpdateAgentHandoverUrl()
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token,
    };
    const body = {
      "allow_agent_handover": !this.agentHandover
  };
    return this.serverService.makePostReq({url:updateAgentHandoverUrl, body, headerData})
  }
}