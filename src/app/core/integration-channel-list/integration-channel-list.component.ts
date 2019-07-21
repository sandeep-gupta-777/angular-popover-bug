import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilityService} from '../../utility.service';

@Component({
  selector: 'app-integration-channel-list',
  templateUrl: './integration-channel-list.component.html',
  styleUrls: ['./integration-channel-list.component.scss']
})
export class IntegrationChannelListComponent implements OnInit {

  @Input() bot;
  @Input() limit: number;
  enabledIntegrationCount;
  constructor(private router: Router) { }

  ngOnInit() {
    this.enabledIntegrationCount = Object.keys(UtilityService.getEnabledIntegrations(this.bot)).length;
  }

  test(channelName) {
    this.router.navigateByUrl(`core/botdetail/chatbot/${this.bot.id}?build-tab=integration&code-tab=df_template#${channelName}`);
  }

  log(x) {
    console.log(x);
  }

}
