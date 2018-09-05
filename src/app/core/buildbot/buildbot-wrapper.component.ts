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
    // this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('tab') || 'basic'; //todo: not a robust code
    this.botcreationstate$.subscribe((value) => {
      if (!value || !value.codeBased) return;
      this.bot = value.codeBased;
    });
    // this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab')||'pipeline';
  }

  createBot() {
    let url = this.constantsService.getCreateNewBot();
    let bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
    if(!this.bot){
      console.error("there is no bot type in url");
    }

    this.bot.bot_type = bot_type;
    this.serverService.makePostReq({url: url, body: this.bot})
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


  datachanged(data: Partial<IBot>) {
    // ;
    this.store.dispatch([
      new SaveNewBotInfo_CodeBased({data: data})
    ]);
  }

}
