import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { ServerService } from '../../../server.service';
import {ConstantsService, EAllActions} from '../../../constants.service';
import { ITestcases } from '../../../../interfaces/testcases';
import { Observable } from 'rxjs';
import { IBot } from '../../interfaces/IBot';
import { IHeaderData } from '../../../../interfaces/header-data';
import { UtilityService } from '../../../utility.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import {LoggingService} from '../../../logging.service';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';

@Component({
  selector: 'app-bot-testing',
  templateUrl: './bot-testing.component.html',
  styleUrls: ['./bot-testing.component.scss']
})
export class BotTestingComponent implements OnInit {

  @Input() bot: IBot;
  testCases$: Observable<[string, string, string][]>;
  myEAllActions = EAllActions;
  handontable_colHeaders;
  handontable_column;
  testCaseData: [string, string, string][] = [];
  testCasesUrl = this.constantsService.getBotTestingUrl();
  stopTestUrl = this.constantsService.stopTestUrl();
  testCaseId: number;
  isData = false;
  modalRef: BsModalRef;
  tableChanged = false;
  cancelTestFlag: boolean;
  myESplashScreens = ESplashScreens;
  showSplashScreen = true;
  constructor(
    private serverService: ServerService,
    private modalService: BsModalService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private store: Store) {
  }

  exportToCSV() {
    const csvData = this.testCaseData;
    const csvColumn = [1, 2, 3];
    this.utilityService.downloadArrayAsCSV(csvData, csvColumn);
  }

  click() {
    this.utilityService.downloadArrayAsCSV([], {});
  }

  ngOnInit() {
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>(
      {
        url: this.testCasesUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    )
      // .map((value) => {
      //   return value.objects.map((item: ITestcases) => {
      //     return item.data[0];
      //   });
      // })
      .subscribe((value) => {
        if (value.objects.length === 0) {
          this.isData = false;
          this.showSplashScreen = true;
        } else {
          this.showSplashScreen = false;
          this.isData = true;
          const testCaseData = value.objects[0].data;

          const testCaseDataForBot: ITestcases = value.objects.find((testcase) => {
            return testcase.bot_id === this.bot.id;
          });

          this.testCaseData =
            (testCaseDataForBot && testCaseDataForBot.data && testCaseDataForBot.data.length > 0) ? testCaseDataForBot.data : [['NO_TEST_DATA', 'NO_TEST_DATA', 'NO_TEST_DATA']];
          // this.testCaseId = value.objects[0].id;
          this.testCaseId = testCaseDataForBot && testCaseDataForBot.id;
          // }
        }
      });
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_BOT_TESTING_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_BOT_TESTING_columns;
  }
  onTableChange() {
    this.tableChanged = true;
  }
  createTC() {
    LoggingService.log(this.testCaseData);
    this.serverService.makePostReq<{ meta: any, objects: ITestcases[] }>({
      url: this.testCasesUrl,
      headerData: { 'bot-access-token': this.bot.bot_access_token },
      body: {
        'status': 'IDLE',
        'data': this.testCaseData
        //   .map((testCaseItem:[ string, string, string ])=>{
        //     /*
        //     *This is to remove third item of testcase array
        //     * Not sure of needed
        //     * */
        //   return [testCaseItem[0], testCaseItem[1]]
        // })
      }
    }).subscribe((value) => {
      this.utilityService.showSuccessToaster('Test cases created');
      this.isData = true;
      this.tableChanged = false;
    });
  }

  updateTC() {
    // ;
    this.serverService.makePutReq<{ meta: any, objects: ITestcases[] }>({
      url: this.testCasesUrl + `${this.testCaseId}/`,
      headerData: { 'bot-access-token': this.bot.bot_access_token },
      body: {
        'status': 'IDLE',
        'data': this.testCaseData
      }
    }).subscribe((value) => {
      this.utilityService.showSuccessToaster('Test cases updated');
      this.isData = true;
      this.tableChanged = false;
    });
  }

  beginTest(Primarytemplat) {
    this.cancelTestFlag = true;
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>(
      {
        url: this.testCasesUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    ).subscribe((value) => {
      if (value.objects[0].status === 'RUNNING') {
        this.cancelTestFlag = true;
        this.openCreateBotModal(Primarytemplat);
      } else {
        this.serverService.makeGetReq<any>(
          {
            url: this.testCasesUrl + 'oneclicktesting/',
            headerData: { 'bot-access-token': this.bot.bot_access_token }
          }
        )
          .subscribe((value) => {
            this.testCaseData = value.data;
            this.cancelTestFlag = false;
          });
      }

    });

  }

  removeNullRowsFromTableData(arr: [string, string, string][]) {
  }
  openCreateBotModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  stopTest() {
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>(
      {
        url: this.stopTestUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    )
      .subscribe((value) => {
        this.cancelTestFlag = false;

      });
  }
}

