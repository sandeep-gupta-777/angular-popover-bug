import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-integration-channel-list',
  templateUrl: './integration-channel-list.component.html',
  styleUrls: ['./integration-channel-list.component.scss']
})
export class IntegrationChannelListComponent implements OnInit {

  @Input() bot;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  test(channelName) {
    this.router.navigateByUrl(`core/botdetail/chatbot/${this.bot.id}?build-tab=integration&code-tab=df_template#${channelName}`);
  }

  log(x){
    console.log(x);
  }

}
