import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IBot} from '../../../../../core/interfaces/IBot';
import {ServerService} from '../../../../../server.service';
import {ITestcases} from '../../../../../../interfaces/testcases';
import {UtilityService} from '../../../../../utility.service';
import {ConstantsService} from '../../../../../constants.service';
import {NgForm} from '@angular/forms';
import {ESplashScreens} from '../../../../../splash-screen/splash-screen.component';

@Component({
  selector: 'app-pipeline-test',
  templateUrl: './pipeline-test.component.html',
  styleUrls: ['./pipeline-test.component.scss']
})
export class PipelineTestComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    public constantsService: ConstantsService,
  ) {
  }

  @Input() bot: IBot;
  testResponse: any;
  myESplashScreens = ESplashScreens;
  @ViewChild('pipelineTestForm') testForm: NgForm;

  ngOnInit() {
  }

  test() {
    console.log( ServerService.getBotTokenById(this.bot.id));
      this.serverService.makePostReq({
        url: this.constantsService.pipelineTestUrl(),
        headerData: {
          'bot-access-token': ServerService.getBotTokenById(this.bot.id),
          'auth-token': null,
          'user-access-token': null,
          'content-type': 'application/json'
        },
        body: this.testForm.value
      }).subscribe((value) => {
        this.testResponse = value;
      },
        (err) => {
          this.testResponse = '';
        }
      );
  }
}
