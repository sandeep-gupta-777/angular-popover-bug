import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICorpus, ICurationResult, ICurationItem } from '../../interfaces/faqbots';
import { IBot } from '../../interfaces/IBot';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { map } from 'rxjs/operators';
import {UtilityService} from '../../../utility.service';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
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
  myESplashScreens = ESplashScreens;
  curationIssuesList: ICurationItem[];
  curationIssuesListLength:number = 0;
  isMoreCurationIssuesListPresent:boolean = false;
  totalLengthCurationIssue:number;
  curationIssuesListisReloading:boolean = false;
  IssuesFilterQueryParams : object = {};
  curationResolvedAndIgnoredList: ICurationItem[];
  curationResolvedAndIgnoredListLength:number = 0;
  isMoreCurationResolvedAndIgnoredListPresent:boolean = false;
  totalLengthCurationResolvedAndIgnored : number;
  ResolvedFilterQueryParams : object = {};
  curationResolvedAndIgnoredListisReloading : boolean = false;
  reloading:boolean = true;
  ngOnInit() {
    this.reloading = true;
    this.curation_filter_form = this.formBuilder.group({
      room_id: [""],
      rule_triggered: [""],
      date_range: [""],
    });

    this.load10MoreCurationIssues(false);
    this.load10MoreCurationResolvedAndIgnored(false);
  }
  // getting 10
  load10MoreCurationIssues$(innit:boolean){
    this.curationIssuesListisReloading = true;
    debugger;
    let curationIssuesListUrl = this.constantsService.curationIssuesListUrl(10,this.curationIssuesListLength)
    return this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationIssuesListUrl + this.objToSrt(this.IssuesFilterQueryParams),
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }
    ).pipe(
      map((value: ICurationResult) => {
        if(this.curationIssuesList){
          if(innit){
            this.curationIssuesList = [...value.objects];
          }else{
            this.curationIssuesList = [...this.curationIssuesList, ...value.objects];
          }
          
        }
        else{
          this.curationIssuesList = [...value.objects];
        }
        this.reloading = false;
        this.curationIssuesListisReloading = false;
        this.totalLengthCurationIssue = value.meta.total_count;
        this.isMoreCurationIssuesListPresent = !!value.meta.next;
        this.curationIssuesListLength = this.curationIssuesListLength + value.objects.length;

      })
    );
  }
  load10MoreCurationIssues(innit:boolean){
    this.load10MoreCurationIssues$(innit).subscribe()
  }
  reinnetalizeCurationIssues(){
    this.curationIssuesListLength = 0;
    this.load10MoreCurationIssues(true);
}
  load10MoreCurationResolvedAndIgnored$(innit:boolean){
    this.curationResolvedAndIgnoredListisReloading = true;
    
    let curationResolvedAndIgnoredListUrl = this.constantsService.curationResolvedAndIgnoredListUrl(10,this.curationResolvedAndIgnoredListLength)
    return this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationResolvedAndIgnoredListUrl + this.objToSrt(this.ResolvedFilterQueryParams),
        headerData: { 'bot-access-token': this.bot.bot_access_token }
      }).pipe(
        map((value: ICurationResult) => {
          if(this.curationResolvedAndIgnoredList){
            if(innit){
              this.curationResolvedAndIgnoredList = [...value.objects]
            }else{
              this.curationResolvedAndIgnoredList = [...this.curationResolvedAndIgnoredList, ...value.objects];
            }
            
          }else{
            this.curationResolvedAndIgnoredList = [...value.objects]
          }
          this.curationResolvedAndIgnoredListisReloading = false;
          this.totalLengthCurationResolvedAndIgnored = value.meta.total_count;
          this.isMoreCurationResolvedAndIgnoredListPresent = !!value.meta.next;
          this.curationResolvedAndIgnoredListLength = this.curationResolvedAndIgnoredListLength + value.objects.length;
        })
      );
  }
  load10MoreCurationResolvedAndIgnored(innit:boolean){
    this.load10MoreCurationResolvedAndIgnored$(innit).subscribe()
  }
  reinnetalizeCurationResolvedAndIgnored(){
          this.curationResolvedAndIgnoredListLength = 0;
          this.load10MoreCurationResolvedAndIgnored(true);
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
          this.totalLengthCurationIssue = this.totalLengthCurationIssue - 1 ;
          this.utilityService.showSuccessToaster(value.message);
          this.curationIssuesListLength = this.curationIssuesListLength - 1;
          this.curationIssuesList = this.curationIssuesList.filter((item) => {return item.id != curationId});
          this.reinnetalizeCurationResolvedAndIgnored()
        });
  }


//  add to article
  addQueryToArticleByIds(data){

    let curationIssueLinkToExistingSectionUrl = this.constantsService.curationIssueLinkToExistingSectionUrl();
    let body = {
      "curation_id_list": [data.curationItemId],
      "section_id":data.section_id
    }
    this.serverService.makePostReq<any>(
      {
        url: curationIssueLinkToExistingSectionUrl,
        headerData: { 'bot-access-token': this.bot.bot_access_token },
        body
      }).subscribe((value) => {
      this.totalLengthCurationIssue = this.totalLengthCurationIssue -1;
      this.utilityService.showSuccessToaster("Issue has been successfully added to article.");
      this.curationIssuesListLength = this.curationIssuesListLength - 1;
      this.curationIssuesList = this.curationIssuesList.filter((item) => {return item.id != data.curationItemId});
      this.reinnetalizeCurationResolvedAndIgnored()
    });
  }

//  filter form ::

  IssuesFormSubmitted(body){
    this.IssuesFilterQueryParams = body;
    this.isMoreCurationIssuesListPresent = false;
    this.reinnetalizeCurationIssues();
  }

  ResolvedFormSubmitted(body){
    this.ResolvedFilterQueryParams = body;
    this.isMoreCurationResolvedAndIgnoredListPresent = false;
    this.reinnetalizeCurationResolvedAndIgnored();
  }


  objToSrt(obj){
    let str :string = "";
    for(let key in obj){
      str = str + "&"+key+"="+obj[key];
    }

    return str;
  }
}
