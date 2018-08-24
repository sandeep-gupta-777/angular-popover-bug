import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {ITestcases} from '../../../../interfaces/testcases';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';

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
  testCaseId: number;
  isData: boolean;


  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private store: Store) {
  }

  exportToCSV() {
    let csvData = this.testCaseData;
    let csvColumn = [1, 2, 3];
    this.utilityService.downloadArrayAsCSV(csvData, csvColumn);
  }

  click() {
    this.utilityService.downloadArrayAsCSV([], {});
  }

  ngOnInit() {
    // ;
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>(
      {
        url: this.testCasesUrl,
        headerData: {'bot-access-token': this.bot.bot_access_token}
      }
    )
    // .map((value) => {
    //   return value.objects.map((item: ITestcases) => {
    //     return item.data[0];
    //   });
    // })
      .subscribe((value) => {
        // ;
        if (value.objects.length === 0) {
          this.isData = false;
        }
        else {
          this.isData = true;
          let testCaseData = value.objects[0].data;
          this.testCaseData = testCaseData.length > 0 ? testCaseData : [['', '', '']];
          // ;
          this.testCaseId = value.objects[0].id;
        }
      });
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_BOT_TESTING_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_BOT_TESTING_columns;
  }

  createTC() {
    // ;
    console.log(this.testCaseData);
    this.serverService.makePostReq<{ meta: any, objects: ITestcases[] }>({
      url:this.testCasesUrl ,
      headerData: {'bot-access-token': this.bot.bot_access_token},
      body:{
        "status":"IDLE",
        "data":this.testCaseData
          .map((testCaseItem:[ string, string, string ])=>{
            /*
            *This is to remove third item of testcase array
            * Not sure of needed
            * */
          return [testCaseItem[0], testCaseItem[1]]
        })
      }
    }).subscribe((value)=>{

    })
  }

  updateTC() {
    // ;
    this.serverService.makePutReq<{ meta: any, objects: ITestcases[] }>({
      url: this.testCasesUrl + `${this.testCaseId}/`,
      headerData: {'bot-access-token': this.bot.bot_access_token},
      body: {
        'status': 'IDLE',
        'data': this.testCaseData
      }
    }).subscribe((value) => {
      console.log('Updated Test cases Successfully');
    });
  }

  beginTest() {
    this.serverService.makeGetReq<any>(
      {
        url: this.testCasesUrl + 'oneclicktesting/',
        headerData: {'bot-access-token': this.bot.bot_access_token}
      }
    )
      .subscribe((value) => {
        // ;
        this.testCaseData = value.data;

      });
  }
}

