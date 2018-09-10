import {Component, OnInit} from '@angular/core';
import {SaveNewBotInfo_CodeBased} from './ngxs/buildbot.action';
import {IBot} from '../interfaces/IBot';
import {IBotCreationState} from './ngxs/buildbot.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UtilityService} from '../../utility.service';
import {AddNewBotInAllBotList, SetAllBotListAction} from '../view-bots/ngxs/view-bot.action';

@Component({
  selector: 'app-buildbot-wrapper',
  templateUrl: './buildbot-wrapper.component.html',
  styleUrls: ['./buildbot-wrapper.component.scss']
})
export class BuildbotWrapperComponent implements OnInit {

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
  bot: IBot;

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
    this.botcreationstate$.subscribe((value) => {
      /*TODO: this is a  hack to avoid loops*/
      if (!value || !value.codeBased) return;
      this.bot = value.codeBased;
    });
  }

  createBot() {
    let bot:IBot = this.utilityService.performFormValidationBeforeSaving(this.bot);
    // delete this.bot.form_validation_basic_info;
    if(!bot) return;
    let url = this.constantsService.getCreateNewBot();
    let bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
    if(!bot){
      console.error("there is no bot type in url");
    }

    bot.bot_type = bot_type;
    if(!this.bot.logo){
      this.bot.logo = "https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png";
    }
    this.serverService.makePostReq({url: url, body: bot})
      .subscribe((createdBot: IBot) => {
        console.log();
        this.store.dispatch([
          new AddNewBotInAllBotList({bot: createdBot})
        ]).subscribe(() => {
          this.router.navigate([`/core/botdetail/${bot_type}/${createdBot.id}`]);
        });
        this.utilityService.showSuccessToaster('Bot Created!');
      });
  }


  datachanged(data: IBot) {

    this.store.dispatch([
      new SaveNewBotInfo_CodeBased({data: data})
    ]);
  }

}
