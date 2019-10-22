import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {IBot} from "../../interfaces/IBot";
import {IHeaderData} from "../../../../interfaces/header-data";
import {ServerService} from "../../../server.service";
import {ConstantsService} from "../../../constants.service";
import {IEntitiesItem, IIntentsItem, IMLCorpusResult} from "../../interfaces/mlBots";
import {is} from "tslint-sonarts/lib/utils/nodes";
import {UtilityService} from "../../../utility.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-ml-model',
  templateUrl: './ml-model.component.html',
  styleUrls: ['./ml-model.component.scss']
})
export class MLModelComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    private serverService : ServerService,
    private utilityService : UtilityService,
    private matDialog : MatDialog
  ) { }
  @Input() bot: IBot;
  intentList : IIntentsItem[];
  entitiesList : IEntitiesItem[];
  selectedTabIndex : number = 0;
  dialogRefWrapper = {ref: null};
  entity_types : any[];
  ngOnInit() {
    this.getAndSetMlCorpus();
  }

  getAndSetMlCorpus(){
    let url = this.constantsService.getMLCorpus();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url,headerData}).subscribe((val : IMLCorpusResult)=>{
      this.intentList = val.objects[0].intents;
      this.entitiesList = val.objects[0].entities;
      debugger;
    })
  }
  addNewIntentOrEntity(isIntent,template: TemplateRef<any>){
    if(isIntent === 0){
        this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
        setTimeout(() => {
          // mlcorpus/entity/types/
          let url = this.constantsService.getMLEntityTypes();
          const headerData: IHeaderData = {
            'bot-access-token': ServerService.getBotTokenById(this.bot.id)
          };
          this.serverService.makeGetReq({url,headerData}).subscribe((value) => {
            this.entity_types = value.entity_types;
            debugger;
          })
        }, 0);

    }else{

    }
  }
}
