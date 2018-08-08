import {Component, Input, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {IBot, IBotVersionResult} from '../../../../../interfaces/IBot';
import {ServerService} from '../../../../../../server.service';
import {ConstantsService} from '../../../../../../constants.service';
import {SaveVersionInfoInBot} from '../../../../../view-bots/ngxs/view-bot.action';
import {SaveCodeInfo} from '../../../../ngxs/buildbot.action';
import { ViewBotStateModel } from '../../../../../view-bots/ngxs/view-bot.state';
import { Observable } from '../../../../../../../../node_modules/rxjs';
import {IHeaderData} from '../../../../../../../interfaces/header-data';
import {UtilityService} from '../../../../../../utility.service';


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent implements OnInit {

  activeTab: string = 'dfTemplate';
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Input() bot: IBot;
  editorCode;
  showVersionList:false;
  activeVersion;
  selectedVersion;
  constructor(

    private store:Store,
    private serverService:ServerService,
    private constantsService:ConstantsService,
    private utilityService:UtilityService
  ) {}

  ngOnInit() {
    // this.editorCode = this.bot.dfTemplate;
    // this.dfTemplate = this.bot.dfTemplate;
    // this.dfRules = this.bot.dfRules;
    // this.generationRules = this.bot.generationRules;
    // this.generationTemplates = this.bot.generationTemplates;

    // this.workflows = this.timePeriod.workflows;
    let url= this.constantsService.getAllVersionsByBotId();//comperror
    let botId = this.bot.id;
    this.serverService.makeGetReq<IBotVersionResult>({url,headerData:{"bot-access-token":this.bot.bot_access_token}})
      .subscribe((value)=>{
        console.log(this.bot.id);
        this.store.dispatch([
          new SaveVersionInfoInBot({data: value.objects, botId: this.bot.id})
        ]);
      })
      this.botlist$.subscribe((value) => {
        let activeVersion = this.bot.store_bot_versions && this.bot.store_bot_versions.find((BotVersion) => {
          return this.bot.active_version_id === BotVersion.id;
        });
        this.activeVersion = activeVersion;
        if (!this.selectedVersion) {
          this.selectedVersion = activeVersion;
          this.tabClicked('dfTemplate');
          };
      }, (err) => { console.log(err) })

  }
  async openFile(inputEl) {
    // debugger;
    this.editorCode = await this.utilityService.readInputFileAsText(inputEl);
  }

  tabClicked(activeTab: string) {
    console.log('tab clicked');
    this.activeTab = activeTab;
    if (this.selectedVersion) {
      if (this.activeTab === 'dfTemplate') {
        this.editorCode = this.selectedVersion.df_template;
      } else if (this.activeTab === 'dfRules') {
        this.editorCode = this.selectedVersion.df_rules;
      } else if (this.activeTab === 'generationRules') {
        this.editorCode = this.selectedVersion.generation_rules;
      } else if (this.activeTab === 'generationTemplates') {
        this.editorCode = this.selectedVersion.generation_templates;
      } else if (this.activeTab === 'workflows') {
        this.editorCode = this.selectedVersion.workflow;
      }
      console.log(this.editorCode);
    }
  }

  saveText(code:string){
    let objectTobeSaved = {};
    objectTobeSaved[this.activeTab] = code;
    this.store.dispatch([
      new SaveCodeInfo({data: objectTobeSaved})
    ])
  }

  saveSelectedVersion(){
    let headerData:IHeaderData = {
        "bot-access-token":this.bot.bot_access_token
    };
    let url = this.constantsService.getSaveVersionByBotId(this.bot.id);
    // debugger;
    this.serverService.makePutReq({url, body:this.selectedVersion, headerData})
      .subscribe((value)=>{
        // debugger;
        console.log(value);
      })
  }

  forkNewVersionFromSelectedVersion(){
    let headerData:IHeaderData = {
      "bot-access-token":this.bot.bot_access_token
    };
    let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
    this.serverService.makePutReq({url, body:this.selectedVersion, headerData})
      .subscribe((value)=>{
        console.log(value);
      })
  }

}
