import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-curation-issues',
  templateUrl: './curation-issues.component.html',
  styleUrls: ['./curation-issues.component.scss']
})
export class CurationIssuesComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    ) { }
  @Input() isResolved:boolean;
  @Input() curationItemData : ICurationItem;
  ngOnInit() {
  }
  channelNameToImg(channel:string){
    let iconObj = this.constantsService.getIntegrationIconForChannelName(channel);
    return iconObj && iconObj.icon;
  }
}
