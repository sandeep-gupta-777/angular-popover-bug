import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {IBot, IBotVersionData, IBotVersionResult, ICode} from '../../../../../interfaces/IBot';
import {ServerService} from '../../../../../../server.service';
import {ConstantsService} from '../../../../../../constants.service';
import {SaveVersionInfoInBot} from '../../../../../view-bots/ngxs/view-bot.action';
import {SaveCodeInfo} from '../../../../ngxs/buildbot.action';
import {ViewBotStateModel} from '../../../../../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IHeaderData} from '../../../../../../../interfaces/header-data';
import {UtilityService} from '../../../../../../utility.service';
import {Router, ActivatedRoute} from '@angular/router';
import {IBotCreationState} from '../../../../ngxs/buildbot.state';


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent implements OnInit {

  activeTab: string = 'df_template';
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Input() bot: IBot;
  @Output() datachanged$ = new EventEmitter();

  editorCode;
  showVersionList: false;
  activeVersion;
  selectedVersion: IBotVersionData;
  code: ICode;
  intentList: any[] = [
    {
      'name': 'Douglas  Pace'
    },
    {
      'name': 'Mcleod  Mueller'
    },
    {
      'name': 'Day  Meyers'
    },
    {
      'name': 'Aguirre  Ellis'
    },
    {
      'name': 'Cook  Tyson'
    }
  ];

  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.workflows = this.timePeriod.workflows;
    let url = this.constantsService.getAllVersionsByBotId();//comperror
    let botId = this.bot.id;
    this.serverService.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .subscribe((botVersionResult) => {
debugger;
        this.store.dispatch([
          new SaveVersionInfoInBot({data: botVersionResult.objects, botId: this.bot.id})
        ]);
      });
    this.botlist$.subscribe((value) => {
      debugger;
      let activeVersion = this.bot.store_bot_versions && this.bot.store_bot_versions.find((BotVersion) => {
        return this.bot.active_version_id === BotVersion.id;
      });
      this.activeVersion = activeVersion;
      if (!this.selectedVersion) {
        this.selectedVersion = activeVersion;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('code-tab') || 'df_template';
        this.tabClicked(this.activeTab);
      }
    }, (err) => {
      console.log(err);
    });


  }

  async openFile(inputEl) {
    this.editorCode = await this.utilityService.readInputFileAsText(inputEl);
  }


  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    this.code = this.selectedVersion;
    /*TODO: We dont need code here... just replace it with selectedVersion. Also we dont need ICode interface*/
    if (this.code) {
      // if (this.activeTab === 'df_template') {
      //   this.editorCode = this.code.df_template;
      // } else if (this.activeTab === 'df_rules') {
      //   this.editorCode = this.code.df_rules;
      // } else if (this.activeTab === 'generation_rules') {
      //   this.editorCode = this.code.generation_rules;
      // } else if (this.activeTab === 'generation_templates') {
      //   this.editorCode = this.code.generation_templates;
      // } else if (this.activeTab === 'workflow') {
      //   this.editorCode = this.code.workflow;
      // }
      debugger;
      this.editorCode = this.code[this.activeTab];
    }
    this.router.navigate(['core/botdetail/codebased/', this.bot.id], {
      queryParams: {'code-tab': activeTab},
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  saveText(codeStr: string) {
    /*some changes have been made to selected version*/
    this.selectedVersion[this.activeTab] = codeStr;
    debugger;
    // let objectTobeSaved = {code: {}};
    // objectTobeSaved.code[this.activeTab] = codeStr;
    // this.datachanged$.emit({data: objectTobeSaved});
  }

  saveSelectedVersion() {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let url = this.constantsService.getSaveVersionByBotId(this.bot.id);
    this.serverService.makePutReq({url, body: this.selectedVersion, headerData})
      .subscribe((value) => {
        console.log(value);
      });
  }

  forkNewVersionFromSelectedVersion() {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
    // this.selectedVersion.version=12;

    delete this.selectedVersion.id;
    delete this.selectedVersion.resource_uri;
    delete this.selectedVersion.resource_uri;

    this.serverService.makePostReq({url, body: this.selectedVersion, headerData})
      .subscribe((forkedVersion: IBotVersionData) => {
        console.log(forkedVersion);
        this.selectedVersion = forkedVersion;
        ;
        this.ngOnInit();
        /*TODO: implement it correctly*/
      });
  }
}
