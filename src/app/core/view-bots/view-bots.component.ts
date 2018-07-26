import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {IHeaderData} from '../../../interfaces/header-data';
import {Store} from '@ngxs/store';
import {SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './ngxs/view-bot.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-bots',
  templateUrl: './view-bots.component.html',
  styleUrls: ['./view-bots.component.scss']
})
export class ViewBotsComponent implements OnInit {

  botList$: Observable<IBot[]>;
  activeTab:string = "codebased";

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router:Router,
    private store: Store) {
  }

  ngOnInit() {
    this.serverService.getNSetBotList()
      .subscribe(()=>{
        console.log("bot list is set in store");
      })
    // let url = this.constantsService.getPipelinebasedBotListUrl();
    // let headerData: IHeaderData = {'content-type': 'application/json'};
    // this.botList$ = this.serverService.makeGetReq<IBot[]>({url, headerData});
    // this.botList$
    //   .subscribe((botList: IBot[]) => {
    //     let codeBasedBotList: IBot[] = [];
    //     let pipelineBasedBotList: IBot[] = [];
    //
    //     botList.forEach((bot) => {
    //       bot.botType !== 'intelligent' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
    //     });
    //     this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
    //     this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
    //   });
  }
  // changeActiveTab(activeTab){
  //   console.log("hi");
  //   this.router.navigate(['core','viewbots',activeTab]);
  //   this.activeTab =activeTab
  //
  // }
}
