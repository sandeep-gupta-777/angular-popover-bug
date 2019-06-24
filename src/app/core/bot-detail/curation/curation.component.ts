import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICorpus, ICurationResult, ICurationItem } from '../../interfaces/faqbots';
import { IBot } from '../../interfaces/IBot';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { map } from 'rxjs/operators';
import {UtilityService} from '../../../utility.service';
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
    private utilityService: UtilityService
  ) { }
  curation_filter_form: FormGroup;
  @Input() bot: IBot;
  curationIssuesList: ICurationItem[] = [];
  curationIssuesListLength:number = 0;
  isMoreCurationIssuesListPresent:boolean = false;
  curationResolvedAndIgnoredList: ICurationItem[] = [];
  curationResolvedAndIgnoredListLength:number = 0;
  isMoreCurationResolvedAndIgnoredListPresent:boolean = false;
  ngOnInit() {
    this.curation_filter_form = this.formBuilder.group({
      room_id: [""],
      rule_triggered: [""],
      date_range: [""],
    });

    this.load10MoreCurationIssues();
    this.load10MoreCurationResolvedAndIgnored();
  }
  // getting 10
  load10MoreCurationIssues$(){
    let curationIssuesListUrl = this.constantsService.curationIssuesListUrl(10,this.curationIssuesListLength)
    return this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationIssuesListUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    ).pipe(
      map((value: ICurationResult) => {
        this.curationIssuesList = [...this.curationIssuesList, ...value.objects];
        this.isMoreCurationIssuesListPresent = !!value.meta.next;
        this.curationIssuesListLength = this.curationIssuesListLength + value.objects.length;
        debugger;
      })
    );
  }
  load10MoreCurationIssues(){
    this.load10MoreCurationIssues$().subscribe()
  }
  load10MoreCurationResolvedAndIgnored$(){
    let curationResolvedAndIgnoredListUrl = this.constantsService.curationResolvedAndIgnoredListUrl(10,this.curationResolvedAndIgnoredListLength)
    return this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationResolvedAndIgnoredListUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }).pipe(
        map((value: ICurationResult) => {
          this.curationResolvedAndIgnoredList = [...this.curationResolvedAndIgnoredList, ...value.objects];
          this.isMoreCurationResolvedAndIgnoredListPresent = !!value.meta.next;
          this.curationResolvedAndIgnoredListLength = this.curationResolvedAndIgnoredListLength + value.objects.length;
        })
      );
  }
  load10MoreCurationResolvedAndIgnored(){
    this.load10MoreCurationResolvedAndIgnored$().subscribe()
  }
  reinnetalizeCurationResolvedAndIgnored(){
          this.curationResolvedAndIgnoredListLength = 0;
          this.curationResolvedAndIgnoredList = [];
          this.load10MoreCurationResolvedAndIgnored();
  }
// ignoring
  ignoreCurationIssueById(curationId){
    let curationIssueIgnoreUrl = this.constantsService.curationIssueIgnoreUrl();
    let body = {
      "curation_id_list": [curationId]
    }
    this.serverService.makePostReq<any>(
      {
        url: curationIssueIgnoreUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token },
        body
      }).subscribe((value) => {
          this.utilityService.showSuccessToaster(value.message);
          this.curationIssuesListLength = this.curationIssuesListLength - 1;
          this.curationIssuesList = this.curationIssuesList.filter((item) => {return item.id != curationId});
          this.reinnetalizeCurationResolvedAndIgnored()
        });
  }

  

}
