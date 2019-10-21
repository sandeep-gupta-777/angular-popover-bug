import {Component, Input, OnInit} from '@angular/core';
import {IBot} from "../../interfaces/IBot";
import {IHeaderData} from "../../../../interfaces/header-data";
import {ServerService} from "../../../server.service";
import {ConstantsService} from "../../../constants.service";
import {IEntitiesItem, IIntentsItem, IMLCorpusResult} from "../../interfaces/mlBots";

@Component({
  selector: 'app-ml-model',
  templateUrl: './ml-model.component.html',
  styleUrls: ['./ml-model.component.scss']
})
export class MLModelComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    private serverService : ServerService
  ) { }
  @Input() bot: IBot;
  intentList : IIntentsItem[];
  entitiesList : IEntitiesItem[];
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
}
