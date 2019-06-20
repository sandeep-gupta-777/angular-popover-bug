import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICorpus, ICurationResult, ICurationItem } from '../../interfaces/faqbots';
import { IBot } from '../../interfaces/IBot';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-curation',
  templateUrl: './curation.component.html',
  styleUrls: ['./curation.component.scss']
})
export class CurationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private constantsService: ConstantsService,
    private serverService: ServerService,
  ) { }
  curation_filter_form: FormGroup;
  @Input() bot: IBot;
  curationIssuesList: ICurationItem[];
  curationResolvedAndIgnoredList: ICurationItem[];
  ngOnInit() {
    this.curation_filter_form = this.formBuilder.group({
      room_id: [""],
      rule_triggered: [""],
      date_range: [""],
    });
    let curationIssuesListUrl = this.constantsService.curationIssuesListUrl()
    this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationIssuesListUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    )
      .subscribe((value: ICurationResult) => {
        this.curationIssuesList = value.objects;
      });

    let curationResolvedAndIgnoredListUrl = this.constantsService.curationResolvedAndIgnoredListUrl()
    this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationResolvedAndIgnoredListUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    )
      .subscribe((value: ICurationResult) => {
        this.curationResolvedAndIgnoredList = value.objects;
      });


  }

}
