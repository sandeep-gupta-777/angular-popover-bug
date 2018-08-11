import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {ITestcases} from '../../../../interfaces/testcases';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {IHeaderData} from '../../../../interfaces/header-data';

@Component({
  selector: 'app-bot-testing',
  templateUrl: './bot-testing.component.html',
  styleUrls: ['./bot-testing.component.scss']
})
export class BotTestingComponent implements OnInit {

  @Input() bot: IBot;
  testCases$: Observable<[string, string, string][]>;
  handontable_colHeaders;
  handontable_column;
  testCaseData: [string, string, string][] = [];
  testCasesUrl = this.constantsService.getBotTestingUrl();


  constructor(private serverService: ServerService, private constantsService: ConstantsService, private store: Store) {
  }

  ngOnInit() {
    // debugger;
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>({url:this.testCasesUrl})
      .map((value) => {
        return value.objects.map((item: ITestcases) => {
          return item.data[0];
        });
      })
      .subscribe((value) => {
        this.testCaseData = value;
      });
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_BOT_TESTING_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_BOT_TESTING_columns;
  }

  createTC(){
    let header:IHeaderData = {
      "bot-access-token":this.bot.bot_access_token
    };
    this.serverService.makePostReq<{ meta: any, objects: ITestcases[] }>({
      url:this.testCasesUrl,
      body:{
        "status":"IDLE",
        "data":[["hi","A1",""]]
      }
    }).subscribe((value)=>{
      console.log(value);
    })
  }
}
