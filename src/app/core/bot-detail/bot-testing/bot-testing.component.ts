import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {ITestcases} from '../../../../interfaces/testcases';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bot-testing',
  templateUrl: './bot-testing.component.html',
  styleUrls: ['./bot-testing.component.scss']
})
export class BotTestingComponent implements OnInit {

  @Input() id: string;
  testCases$: Observable<ITestcases>;
  handontable_colHeaders;
  handontable_column;

  constructor(private serverService: ServerService, private constantsService: ConstantsService, private store: Store) {
  }

  ngOnInit() {
    let url = this.constantsService.getBotTestingUrl(this.id);
    this.testCases$ = this.serverService.makeGetReq<ITestcases>({url});
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_BOT_TESTING_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_BOT_TESTING_columns;
  }


}
