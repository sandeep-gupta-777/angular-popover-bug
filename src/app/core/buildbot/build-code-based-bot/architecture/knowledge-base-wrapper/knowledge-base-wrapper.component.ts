import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IUser} from '../../../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../../../../server.service';
import {ConstantsService} from '../../../../../constants.service';
import {ICustomNerItem} from '../../../../../../interfaces/custom-ners';
import {Observable} from 'rxjs';
import {IHeaderData} from '../../../../../../interfaces/header-data';
import {IBot} from '../../../../interfaces/IBot';
import {EBotType, UtilityService} from '../../../../../utility.service';
import {KnowledgeBaseComponent} from '../knowledge-base/knowledge-base.component';
import {ESplashScreens} from '../../../../../splash-screen/splash-screen.component';
import {EventService} from '../../../../../event.service';

@Component({
  selector: 'app-knowledge-base-wrapper',
  templateUrl: './knowledge-base-wrapper.component.html',
  styleUrls: ['./knowledge-base-wrapper.component.scss']
})
export class KnowledgeBaseWrapperComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Input() bot: IBot;
  myESplashScreens = ESplashScreens;
  @ViewChild(KnowledgeBaseComponent) knowledgeBaseComponent: KnowledgeBaseComponent;
  enterpriseNerData: ICustomNerItem[];
  totalRecords = 10;
  currentPageNumber = 1;
  // custumNerDataForSmartTable = [];
  custumNerDataForSmartTable: ICustomNerItem[];
  @Output() initDone$ = new EventEmitter();
  constructor(
    private store: Store,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    public constantsService: ConstantsService) {
  }

  showLoader = false;
  ngOnInit() {
    this.currentPageNumber = Number(this.activatedRoute.snapshot.queryParamMap.get('page') || '1');
    this.fetchNers(10, this.currentPageNumber - 1);
  }

  pageChanged(currentPageNumber) {
    this.router.navigate(['.'], {
      queryParams: {page: currentPageNumber},
      queryParamsHandling: 'merge',
      relativeTo: this.activatedRoute
    });
    this.currentPageNumber = currentPageNumber;
    this.fetchNers(10, currentPageNumber - 1);
  }


  fetchNers(limit: number = 10, offset: number = 0) {
    this.showLoader = true;
    const url = this.constantsService.getCustomBotNER(limit, (offset * 10));
    const headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
    this.serverService.makeGetReq({url, headerData})
      .subscribe((value: { meta: { total_count: number }, objects: [ICustomNerItem] }) => {
        this.totalRecords = value.meta.total_count;
        this.showLoader = false;
        this.custumNerDataForSmartTable = value.objects;
        /*For selected ner*/
        const selectedNerId = this.activatedRoute.snapshot.queryParamMap.get('ner_id');
        if (!selectedNerId) { return; }
        const getNerByIdUrl = this.constantsService.getCustomNerById(selectedNerId);
        const doesSelectedNerExistsIn_custumNerDataForSmartTable =
          this.custumNerDataForSmartTable.find(item => item.id === Number(selectedNerId));
        setTimeout(()=>{
          this.initDone$.emit(this);
        });
        if (doesSelectedNerExistsIn_custumNerDataForSmartTable) { return; }
        this.serverService.makeGetReq({url: getNerByIdUrl})
          .subscribe((values: ICustomNerItem[]) => {
            if (values.length > 0) {
              this.custumNerDataForSmartTable.push(values[0]);
            }
          });
      });
  }

  updateOrSaveCustomNer(selectedOrNewRowData: ICustomNerItem) {

    try {
      /*TODO: this is temporary fix to remove copy paste from excel issue*/
      selectedOrNewRowData.values.forEach((obj, index, array) => {
        if (obj) {
          for (const key in obj) {
            obj[key] = obj[key] && obj[key].trim();
          }
        }
      });
    } catch (e) {
      console.log(e);
    }


    this.serverService.updateOrSaveCustomNer(selectedOrNewRowData, this.bot)
      .subscribe((value) => {

        const doesNerExistsInSmartTable = this.custumNerDataForSmartTable.find((nerObj) => nerObj.id === value.id);
        if (!doesNerExistsInSmartTable) {
          (<any>this.custumNerDataForSmartTable).push({...value, highlight: true});
        }
        EventService.knowledgeBaseData$.emit(false);
        this.custumNerDataForSmartTable = [...this.custumNerDataForSmartTable];
        this.addQueryParamsInCurrentRoute({ner_id: value.id});
        this.utilityService.showSuccessToaster('Customner saved');

        if(this.knowledgeBaseComponent.KnowledgeBasePresentationComponent){

          this.knowledgeBaseComponent.KnowledgeBasePresentationComponent.initialiseSideBarService();
        }

      });
  }

  //   let body: ICustomNerItem;
  //   let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
  //   let url, methodStr;
  //   if (selectedOrNewRowData && selectedOrNewRowData.id) {/*update customner*/
  //     url = this.constantsService.updateCustomBotNER(selectedOrNewRowData.id);
  //     methodStr = 'makePutReq';
  //     body = {
  //       values: selectedOrNewRowData.values,
  //       column_headers: selectedOrNewRowData.column_headers
  //     };
  //   } else {/*create a new customner*/
  //     url = this.constantsService.createNewCustomBotNER();
  //     methodStr = 'makePostReq';
  //     body = selectedOrNewRowData;
  //   }
  //   this.serverService[methodStr]({url, body, headerData})
  //     .subscribe((value) => {
  //       LoggingService.log(value);
  //       this.utilityService.showSuccessToaster('Successfully saved');
  //     });
  // }

  addQueryParamsInCurrentRoute(queryParamObj: object) {
    this.router.navigate(['.'], {
      queryParams: queryParamObj,
      relativeTo: this.activatedRoute,
      // skipLocationChange: true,/*not working*/
      queryParamsHandling: 'merge'
    });
  }

  deleteNer(ner_id: number) {
    this.serverService.deleteNer(ner_id, this.bot)
      .subscribe(() => {

        this.utilityService.showSuccessToaster('Customner deleted');
        this.router.navigate([`/core/botdetail/${EBotType.chatbot}/${this.bot.id}`], {
          queryParams: {
            'build-tab': 'knowledge',
            'showNerTable': true
          }
        });
        const indexToBeDeleted = this.custumNerDataForSmartTable.findIndex((nerObj) => nerObj.id == ner_id);
        if (indexToBeDeleted !== -1) { this.custumNerDataForSmartTable.splice(indexToBeDeleted, 1); }
        this.knowledgeBaseComponent.showNerSmartTable();
        this.custumNerDataForSmartTable = [...this.custumNerDataForSmartTable];
        EventService
          .createConceptFullScreen$
          .emit(false);
      });
  }

}
