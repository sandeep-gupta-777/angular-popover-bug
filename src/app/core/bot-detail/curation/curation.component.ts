import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  ICorpus,
  ICurationResult,
  ICurationItem,
  IAllCorpusResult,
  ICurationResolvedAggregation,
  ICurationIssuesAggregation
} from '../../interfaces/faqbots';
import {IBot} from '../../interfaces/IBot';
import {ConstantsService} from 'src/app/constants.service';
import {ServerService} from 'src/app/server.service';
import {map} from 'rxjs/operators';
import {UtilityService} from '../../../utility.service';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ELoadingStatus} from '../../../button-wrapper/button-wrapper.component';
import {ISessionItem} from '../../../../interfaces/sessions';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-curation',
  templateUrl: './curation.component.html',
  styleUrls: ['./curation.component.scss']
})
export class CurationComponent implements OnInit {
  myELoadingStatus = ELoadingStatus;

  constructor(
    private formBuilder: FormBuilder,
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService
  ) {
  }

  corpusState: string;
  curation_filter_form: FormGroup;
  @Input() bot: IBot;
  myESplashScreens = ESplashScreens;
  curationIssuesList: ICurationItem[];
  curationIssuesListLength = 0;
  isMoreCurationIssuesListPresent = false;
  totalLengthCurationIssue: number;
  curationIssuesListisReloading = false;
  IssuesFilterQueryParams: object = {
    'order_by': `-updated_at`
  };
  curationResolvedAndIgnoredList: ICurationItem[];
  curationResolvedAndIgnoredListLength = 0;
  isMoreCurationResolvedAndIgnoredListPresent = false;
  totalLengthCurationResolvedAndIgnored: number;
  ResolvedFilterQueryParams: object = {
    'curation_state__in': 'resolved,ignored',
    'order_by': `-updated_at`
  };
  curationResolvedAndIgnoredListisReloading = false;
  reloading = true;
  liveBotUpdatedAt: number;
  aggregationResolvedData: ICurationResolvedAggregation;
  issuesAggrigationData: ICurationIssuesAggregation;
  topArticlesWithIssues: any[];
  topArticlesWithIssuesReloading = false;
  activeTab = 0;
  curationSettingsForm: FormGroup;
  updateSettingsLoading = ELoadingStatus.default;
  curationIssuesFilterForm: FormGroup;
  curationResolvedFilterForm: FormGroup;

  isBotAdvancedDataProtective = false;

  ngOnInit() {

    this.reloading = true;
    this.curation_filter_form = this.formBuilder.group({
      room_id: [''],
      rule_triggered: [''],
      date_range: [''],
    });

    this.load10MoreCurationIssues(false);
    this.load10MoreCurationResolvedAndIgnored(false);
    this.setLiveBotUpdatedAt();
    this.getResolvedAggregationData();
    this.getIssuesAggregationData();
    this.setTopArticlesWithIssues();
    this.makeCurationSettingsForm();
    this.getCorpus$().subscribe();

    this.makeCurationIssuesFilterForm();
    this.makeCurationResolvedFilterForm();

    this.curationIssuesFilterForm.get('order_by').valueChanges
      .subscribe((val) => {
        if (val) {

          const data = {
            'unsolved': true,
            'value': {...this.curationIssuesFilterForm.value, 'order_by': val}
          };
          this.submitedForm(data);
        }
      });
    this.curationResolvedFilterForm.get('order_by').valueChanges
      .subscribe((val) => {
        if (val) {
          const data = {
            'unsolved': false,
            'value': {...this.curationResolvedFilterForm.value, 'order_by': val}
          };
          this.submitedForm(data);
        }
      });
    this.curationIssuesFilterForm.get('count').disable();
    this.curationResolvedFilterForm.get('count').disable();
    this.curationIssuesFilterForm.get('issue_count_filter').valueChanges
      .subscribe((val) => {
        if (!!val) {
          this.curationIssuesFilterForm.get('count').enable();
        } else {
          this.curationIssuesFilterForm.get('count').disable();
        }
      });
    this.curationResolvedFilterForm.get('issue_count_filter').valueChanges
      .subscribe((val) => {
        if (!!val) {
          this.curationResolvedFilterForm.get('count').enable();
        } else {
          this.curationResolvedFilterForm.get('count').disable();
        }
      });
  }

  // filter curation form
  makeCurationIssuesFilterForm() {
    this.curationIssuesFilterForm = this.formBuilder.group({
      'order_by': ['updated_at'],
      'room_id': [],
      'triggered_rules': [],
      'updated_at__range': [],
      'issue_count_filter': [],
      'count': []
    });
  }

  makeCurationResolvedFilterForm() {
    this.curationResolvedFilterForm = this.formBuilder.group({
      'order_by': ['updated_at'],
      'hideIgnored': [],
      'room_id': [],
      'triggered_rules': [],
      'updated_at__range': [],
      'issue_count_filter': [],
      'count': []
    });
  }

  submitedForm(data) {
    const body = {};
    const unsolved = data.unsolved;
    const value = data.value;
    for (const key in value) {
      if (value[key]) {
        body[key] = value[key];
      }
    }
    if (body['updated_at__range'] && Object.keys(body['updated_at__range']).length > 0) {
      body['updated_at__range'] = body['updated_at__range']['begin'].getTime() + ',' + (body['updated_at__range']['end'].getTime() + 86340000);
    } else {
      delete body['updated_at__range'];
    }

    if (body['issue_count_filter'] && body['count']) {
      body[body['issue_count_filter']] = body['count'];
      delete body['issue_count_filter'];
      delete body['count'];
    } else {
      delete body['issue_count_filter'];
      delete body['count'];
    }

    if (body['order_by']) {
      body['order_by'] = `-${body['order_by']}`;
    } else {
      body['order_by'] = `-updated_at`;
    }
    if (unsolved) {
      delete body['hideIgnored'];
    } else {
      if (body['hideIgnored']) {
        body['curation_state__in'] = 'resolved';
        delete body['hideIgnored'];
      } else {
        body['curation_state__in'] = 'resolved,ignored';
        delete body['hideIgnored'];
      }
    }

    if (unsolved) {
      this.IssuesFormSubmitted(body);
    } else {
      this.ResolvedFormSubmitted(body);
    }
  }

  // setLiveBotUpdatedAt
  setLiveBotUpdatedAt() {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const url = this.constantsService.getLiveCorpus();
    this.serverService.makeGetReq<IAllCorpusResult>({url, headerData})
      .subscribe((Result) => {
        if (Result.objects && Result.objects[0] && Result.objects[0].updated_at) {
          this.liveBotUpdatedAt = Result.objects[0].updated_at;
        }
      });
  }

  // getting 10
  load10MoreCurationIssues$(innit: boolean) {

    this.curationIssuesListisReloading = true;
    const curationIssuesListUrl = this.constantsService.curationIssuesListUrl(10, this.curationIssuesListLength);
    return this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationIssuesListUrl + this.objToSrt(this.IssuesFilterQueryParams),
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot)}
      }
    ).pipe(
      map((value: ICurationResult) => {
        if (value.meta && value.meta.data_encrypted) {
          this.isBotAdvancedDataProtective = true;
          this.reloading = false;
          this.curationIssuesListisReloading = false;
        } else {
          this.isBotAdvancedDataProtective = false;
          if (this.curationIssuesList) {
            if (innit) {
              this.curationIssuesList = [...value.objects];
            } else {
              this.curationIssuesList = [...this.curationIssuesList, ...value.objects];
            }

          } else {
            this.curationIssuesList = [...value.objects];
          }
          this.reloading = false;
          this.curationIssuesListisReloading = false;
          this.totalLengthCurationIssue = value.meta.total_count;
          this.isMoreCurationIssuesListPresent = !!value.meta.next;
          this.curationIssuesListLength = this.curationIssuesListLength + value.objects.length;
        }
      })
    );
  }

  load10MoreCurationIssues(innit: boolean) {
    this.load10MoreCurationIssues$(innit).subscribe();
  }

  reinnetalizeCurationIssues() {
    this.curationIssuesListLength = 0;
    this.load10MoreCurationIssues(true);
  }

  load10MoreCurationResolvedAndIgnored$(innit: boolean) {
    this.curationResolvedAndIgnoredListisReloading = true;

    const curationResolvedAndIgnoredListUrl = this.constantsService.curationResolvedAndIgnoredListUrl(10, this.curationResolvedAndIgnoredListLength);
    return this.serverService.makeGetReq<ICurationResult>(
      {
        url: curationResolvedAndIgnoredListUrl + this.objToSrt(this.ResolvedFilterQueryParams),
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot)}
      }).pipe(
      map((value: ICurationResult) => {
        if (value.meta && value.meta.data_encrypted) {
          this.isBotAdvancedDataProtective = true;
          this.curationResolvedAndIgnoredListisReloading = false;
        } else {
          this.isBotAdvancedDataProtective = false;
          if (this.curationResolvedAndIgnoredList) {
            if (innit) {
              this.curationResolvedAndIgnoredList = [...value.objects];
            } else {
              this.curationResolvedAndIgnoredList = [...this.curationResolvedAndIgnoredList, ...value.objects];
            }

          } else {
            this.curationResolvedAndIgnoredList = [...value.objects];
          }
          this.curationResolvedAndIgnoredListisReloading = false;
          this.totalLengthCurationResolvedAndIgnored = value.meta.total_count;
          this.isMoreCurationResolvedAndIgnoredListPresent = !!value.meta.next;
          this.curationResolvedAndIgnoredListLength = this.curationResolvedAndIgnoredListLength + value.objects.length;
        }
      })
    );
  }

  load10MoreCurationResolvedAndIgnored(innit: boolean) {
    this.load10MoreCurationResolvedAndIgnored$(innit).subscribe();
  }

  reinnetalizeCurationResolvedAndIgnored() {
    this.curationResolvedAndIgnoredListLength = 0;
    this.load10MoreCurationResolvedAndIgnored(true);
  }

// ignoring
  ignoreCurationIssueById(curationIds) {
    const curationIssueIgnoreUrl = this.constantsService.curationIssueIgnoreUrl();
    const body = {
      'curation_id_list': curationIds
    };
    this.serverService.makePostReq<any>(
      {
        url: curationIssueIgnoreUrl,
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot)},
        body
      }).subscribe((value) => {
      this.totalLengthCurationIssue = this.totalLengthCurationIssue - curationIds.length;
      this.utilityService.showSuccessToaster(value.message);
      this.curationIssuesListLength = this.curationIssuesListLength - curationIds.length;
      this.curationIssuesList = this.curationIssuesList.filter((item) => {
        return !(curationIds.find(c_id => c_id === item.id));
      });
      this.reinnetalizeCurationResolvedAndIgnored();
      this.getResolvedAggregationData();
    });
  }


//  add to article
  addQueryToArticleByIds(data) {
    const curationIssueLinkToExistingSectionUrl = this.constantsService.curationIssueLinkToExistingSectionUrl();
    const body = {
      'curation_id_list': data.curationItemId,
      'section_id': data.section_id
    };
    this.serverService.makePostReq<any>(
      {
        url: curationIssueLinkToExistingSectionUrl,
        headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot)},
        body
      }).subscribe((value) => {
      this.totalLengthCurationIssue = this.totalLengthCurationIssue - data.curationItemId.length;
      this.utilityService.showSuccessToaster('Issues have been successfully added to article.');
      this.curationIssuesListLength = this.curationIssuesListLength - data.curationItemId.length;
      this.curationIssuesList = this.curationIssuesList.filter((item) => {
        return !(data.curationItemId.find(c_id => c_id === item.id));
      });
      this.getCorpus$().subscribe();
      this.reinnetalizeCurationResolvedAndIgnored();
      this.getResolvedAggregationData();
    });
  }


//  filter form ::

  IssuesFormSubmitted(body) {
    this.IssuesFilterQueryParams = body;
    this.isMoreCurationIssuesListPresent = false;
    this.reinnetalizeCurationIssues();
  }

  ResolvedFormSubmitted(body) {
    this.ResolvedFilterQueryParams = body;
    this.isMoreCurationResolvedAndIgnoredListPresent = false;
    this.reinnetalizeCurationResolvedAndIgnored();
  }


  objToSrt(obj) {
    let str = '';
    for (const key of Object.keys(obj)) {
      str = str + '&' + key + '=' + obj[key];
    }

    return str;
  }


  // get resolved issues
  getResolvedAggregationData() {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const getAggregationResolvedUrl = this.constantsService.getAggregationResolved();
    this.serverService.makeGetReq<IAllCorpusResult>({url: getAggregationResolvedUrl, headerData})
      .subscribe((Result) => {
        this.aggregationResolvedData = Result;
      });
  }

  getIssuesAggregationData() {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const getAggregationIssuesUrl = this.constantsService.getAggregationIssues();
    this.serverService.makeGetReq<IAllCorpusResult>({url: getAggregationIssuesUrl, headerData})
      .subscribe((Result) => {
        this.issuesAggrigationData = Result;
      });
  }

  setTopArticlesWithIssues() {
    this.topArticlesWithIssuesReloading = true;
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const url = this.constantsService.getTopArticlesWithIssues();
    this.serverService.makeGetReq<IAllCorpusResult>({url, headerData})
      .subscribe((Result) => {
        this.topArticlesWithIssuesReloading = false;
        this.topArticlesWithIssues = Result.objects;
      });
  }

  resolveArticleWithTopIssues(section) {
    this.curationIssuesFilterForm.reset();

    const value = {
      'order_by': 'group_by_section',
      'issue_count_filter': 'issue_count_per_section',
      'count': section.count
    };
    this.curationIssuesFilterForm.patchValue(value, {onlySelf: true, emitEvent: false});
    this.curationIssuesFilterForm.get('count').enable();
    this.activeTab = 1;
    this.submitedForm({
      'unsolved': true,
      'value': {...this.curationIssuesFilterForm.value, ...value}
    });
  }

  filterArticleWithTriggeredRule(triggeredRule) {
    this.curationIssuesFilterForm.reset();

    let value = {
      'triggered_rules': triggeredRule,
    };
    this.curationIssuesFilterForm.patchValue(value, {onlySelf: true, emitEvent: false});
    this.activeTab = 1;
    this.submitedForm({
      'unsolved': true,
      'value': {...this.curationIssuesFilterForm.value, ...value}
    });
  }


  atlestOneCurationSettingsNeeded(curationSettingsForm) {

    let ans = false;
    const arr = Object.keys(curationSettingsForm.get('curation_settings').value);
    arr.forEach(v => {
      ans = ans || curationSettingsForm.get('curation_settings').value[v].enabled;
    });
    return !ans;
  }

  updateSettingsHandler() {
    if (this.curationSettingsForm.valid) {

      if (this.curationSettingsForm.get('allow_curation').value === true && this.atlestOneCurationSettingsNeeded(this.curationSettingsForm)) {
        this.utilityService.showErrorToaster('At least one rule needs to be enabled');
      } else {
        let botImage: IBot;
        botImage = {...this.curationSettingsForm.value};
        botImage.id = this.bot.id;
        botImage.bot_access_token = ServerService.getBotTokenById(this.bot);
        this.updateSettingsLoading = ELoadingStatus.loading;
        this.serverService.updateBot(botImage).subscribe(() => {
          this.updateSettingsLoading = ELoadingStatus.success;
        }, (val) => {
          this.updateSettingsLoading = ELoadingStatus.error;
          if (val.error.error) {

            this.utilityService.showErrorToaster(val.error.message);
          }
        });
      }
    } else {
      if (this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').errors['max'] ||
        this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').errors['min']) {
        this.utilityService.showErrorToaster('Score should lie between minimum threshold and 1');
      } else if (this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').errors['required']) {
        this.utilityService.showErrorToaster('Low confidence score is not configured');
      } else {
        this.utilityService.showErrorToaster('Settings form is not valid');
      }

    }

  }

  makeCurationSettingsForm() {
    this.curationSettingsForm = this.formBuilder.group({
      'allow_curation': [this.bot.allow_curation],
      'curation_settings': this.formBuilder.group({
        'agent_handover': this.formBuilder.group({'enabled': [this.bot.curation_settings.agent_handover.enabled]}),
        'downvoted': this.formBuilder.group({'enabled': [this.bot.curation_settings.downvoted.enabled]}),
        'fallback': this.formBuilder.group({'enabled': [this.bot.curation_settings.fallback.enabled]}),
        'from_session': this.formBuilder.group({'enabled': [this.bot.curation_settings.from_session.enabled]}),
        'low_confidence': this.formBuilder.group({
          'enabled': [this.bot.curation_settings.low_confidence.enabled],
          'low_confidence_score': [this.bot.curation_settings.low_confidence.low_confidence_score, Validators.max(1)]
        }),
        'partial_match': this.formBuilder.group({'enabled': [this.bot.curation_settings.partial_match.enabled]}),
      })
    });
  }

  refershCurrentTabHandler() {
    if (this.activeTab === 0) {
      this.getIssuesAggregationData();
      this.setTopArticlesWithIssues();
    }
    if (this.activeTab === 1) {
      this.getCorpus$().subscribe();
      this.IssuesFormSubmitted({
        'order_by': `-updated_at`
      });
    }
    if (this.activeTab === 2) {
      this.getResolvedAggregationData();
      this.ResolvedFormSubmitted({
        'curation_state__in': 'resolved,ignored',
        'order_by': `-updated_at`
      });
    }
  }

  getCorpus$() {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const getCorpusForFAQBot = this.constantsService.getDraftCorpusForFAQBot();

    return this.serverService.makeGetReq<any>({url: getCorpusForFAQBot, headerData})
      .pipe(
        map((val) => {
          this.corpusState = val.state;
          const j = val.state.charAt(0).toUpperCase();
          this.corpusState = j + val.state.substr(1).toLowerCase();
        })
      );
  }

  requestEncription(resone: string) {
    if(!(resone.trim())){
      this.utilityService.showErrorToaster('Invalid decryption key');
    }else{
      const headerData: IHeaderData = {
        'bot-access-token': ServerService.getBotTokenById(this.bot)
      };
      const body = {
        decrypt_audit_type: 'bot',
        message: resone.trim()
      };
      const url = this.constantsService.getDecryptUrl();
      this.serverService.makePostReq({headerData, body, url}).subscribe((val) => {
        this.load10MoreCurationIssues(false);
        this.load10MoreCurationResolvedAndIgnored(false);
        this.setLiveBotUpdatedAt();
        this.getResolvedAggregationData();
        this.getIssuesAggregationData();

        this.isBotAdvancedDataProtective = true;
      });

    }

  }
}
