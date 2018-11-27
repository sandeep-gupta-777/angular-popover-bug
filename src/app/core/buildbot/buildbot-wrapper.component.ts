import {Component, OnInit} from '@angular/core';
import {ResetBuildBotToDefault, SaveNewBotInfo_CodeBased, SaveNewBotInfo_PipelineBased} from './ngxs/buildbot.action';
import {IBot} from '../interfaces/IBot';
import {IBotCreationState} from './ngxs/buildbot.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EBotType, UtilityService} from '../../utility.service';
import {AddNewBotInAllBotList, SetAllBotListAction} from '../view-bots/ngxs/view-bot.action';
import {LoggingService} from '../../logging.service';

@Component({
  selector: 'app-buildbot-wrapper',
  templateUrl: './buildbot-wrapper.component.html',
  styleUrls: ['./buildbot-wrapper.component.scss']
})
export class BuildbotWrapperComponent implements OnInit {

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
  bot: IBot = {};
  bot_type: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
    this.botcreationstate$.subscribe((value) => {
      /*TODO: this is a  hack to avoid loops*/
      if (!value) { return; }
      if (this.bot_type === EBotType.chatbot && value.codeBased) {
        this.bot = value.codeBased;
      } else if (this.bot_type === EBotType.intelligent && value.pipeLineBased) {
        this.bot = value.pipeLineBased;
      }
    });
  }

  createBot() {

    const bot: IBot = this.utilityService.performFormValidationBeforeSaving(this.bot);
    if (!bot) { return; }
    const url = this.constantsService.getCreateNewBot();
    if (!bot) {
      console.error('there is no bot type in url');
    }

    bot.bot_type = this.bot_type;
    if (!this.bot.logo) {
      this.bot.logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
    }
    this.serverService.makePostReq({url: url, body: bot})
      .subscribe((createdBot: IBot) => {
        this.store.dispatch([
          new AddNewBotInAllBotList({bot: createdBot}),
          new ResetBuildBotToDefault()
        ]).subscribe(() => {
          this.router.navigate([`/core/botdetail/${this.bot_type}/${createdBot.id}`]);
        });
        this.utilityService.showSuccessToaster('Bot Created');
      });
  }


  datachanged(data: IBot) {
    const bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
    if (bot_type === EBotType.chatbot) {
      this.store.dispatch([
        new SaveNewBotInfo_CodeBased({data: data})
      ]);
    } else {
      this.store.dispatch([
        new SaveNewBotInfo_PipelineBased({data: data})
      ]);
    }
  }

  navigateToDashboard() {
    this.router.navigate(['']);
  }
}
