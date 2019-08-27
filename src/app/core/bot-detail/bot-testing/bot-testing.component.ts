import {Component, Input, OnInit, TemplateRef, EventEmitter, Output} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {ITestcases} from '../../../../interfaces/testcases';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';
import {LoggingService} from '../../../logging.service';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {ModalImplementer} from '../../../modal-implementer';
import {MatDialog} from '@angular/material';
import {skip} from 'rxjs/operators';
import {EAllActions} from '../../../typings/enum';

@Component({
  selector: 'app-bot-testing',
  templateUrl: './bot-testing.component.html',
  styleUrls: ['./bot-testing.component.scss']
})
export class BotTestingComponent extends ModalImplementer implements OnInit {
  tag = 'BotTestingComponent';
  @Input() bot: IBot;
  testCases$: Observable<[string, string, string][]>;
  myEAllActions = EAllActions;
  handontable_colHeaders;
  handontable_column;
  expectedCSVHeaders = ['Message', 'Expected Template'];
  testCaseData: [string, string, string][] = [['<The user message you wish to test for>', '<The name of the template key you expect the bot to return>', '']];
  testCasesUrl = this.constantsService.getBotTestingUrl();
  // expectedCSVHeaders = ['Message', 'Expected Template'];
  stopTestUrl = this.constantsService.stopTestUrl();
  testCaseId: number;
  isData = false;
  tableChanged = false;
  cancelTestFlag = false;
  myESplashScreens = ESplashScreens;
  showSplashScreen = false;
  showLoader = false;
  @Output() initDone$ = new EventEmitter<BotTestingComponent>();

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private store: Store) {
    super(utilityService, matDialog);
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
    this.showLoader = true;
    this.refreshTest();
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_BOT_TESTING_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_BOT_TESTING_columns;

  }

  refreshTest() {
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>(
      {
        url: this.testCasesUrl,
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}
      }
    )
      .subscribe((value) => {

        this.showLoader = false;
        if (value.objects.length === 0) {
          this.isData = false;
          this.showSplashScreen = true;
        } else {
          this.showSplashScreen = false;
          this.isData = true;

          if (value.objects[0].status === 'RUNNING') {
            this.cancelTestFlag = true;
          } else {
            this.cancelTestFlag = false;
          }
          const testCaseDataForBot: ITestcases = value.objects.find((testcase) => {
            return testcase.bot_id === this.bot.id;
          });

          this.testCaseData =
            // tslint:disable-next-line:max-line-length
            (testCaseDataForBot && testCaseDataForBot.data && testCaseDataForBot.data.length > 0) ? testCaseDataForBot.data : [['NO_TEST_DATA', 'NO_TEST_DATA', 'NO_TEST_DATA']];
          // this.testCaseId = value.objects[0].roomId;
          this.testCaseId = testCaseDataForBot && testCaseDataForBot.id;
          // }
        }
        this.initDone$.emit(this);
      });
  }

  afterTabledataChange(data) {

    if (data) {
      const didEditedableItemsChange = data.find((val) => {
        return val[1] <= 1;
      });

      if (didEditedableItemsChange) {
        this.tableChanged = true;
      }
    }
  }

  onTableChange() {
    this.tableChanged = true;
  }

  createTC() {
    LoggingService.log(this.testCaseData);
    this.serverService.makePostReq({
      url: this.testCasesUrl,
      headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)},
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
    }).subscribe((value: any) => {
      this.initDone$.emit(this);
      this.utilityService.showSuccessToaster('Test cases created');
      this.isData = true;
      this.tableChanged = false;
      this.testCaseId = value.id;
    });
  }

  updateTC() {

    this.serverService.makePutReq<{ meta: any, objects: ITestcases[] }>({
      url: this.testCasesUrl + `${this.testCaseId}/`,
      headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)},
      body: {
        'status': 'IDLE',
        'data': this.testCaseData
      }
    }).subscribe((value) => {
      this.initDone$.emit(this);
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
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}
      }
    ).subscribe((value) => {
      if (value.objects[0].status === 'RUNNING') {
        this.cancelTestFlag = true;
        this.openCreateBotModal(Primarytemplat);
      } else {
        this.serverService.makeGetReq<any>(
          {
            url: this.testCasesUrl + 'oneclicktesting/',
            headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}
          }
        )
          .subscribe((value_temp) => {
            this.testCaseData = value_temp.data;
            this.cancelTestFlag = false;
          });
      }

    });

  }

  removeNullRowsFromTableData(arr: [string, string, string][]) {
  }

  openCreateBotModal(template: TemplateRef<any>) {
    this.openDangerModal(template);
  }

  stopTest() {
    this.serverService.makeGetReq<{ meta: any, objects: ITestcases[] }>(
      {
        url: this.stopTestUrl,
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}
      }
    )
      .subscribe((value) => {
        this.cancelTestFlag = false;

      });
  }
}

