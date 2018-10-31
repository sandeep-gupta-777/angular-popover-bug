import {Component, OnInit, ViewChild} from '@angular/core';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {ConstantsService} from '../../../constants.service';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {ICustomNerItem} from '../../../../interfaces/custom-ners';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IAppState} from '../../../ngxs/app.state';
import {SetEnterpriseNerData} from '../../../ngxs/app.action';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../../utility.service';
import {EBotType} from '../../view-bots/view-bots.component';
import {KnowledgeBaseComponent} from '../../buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component';

@Component({
  selector: 'app-view-customner',
  templateUrl: './view-customner.component.html',
  styleUrls: ['./view-customner.component.scss']
})
export class ViewCustomnerComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() app$: Observable<IAppState>;
  custumNerDataForSmartTable: ICustomNerItem[];
  recordsPerPage:number=15;
  settings = {
    columns: {
    key: {
      title: 'Concept Key'
    },
    ner_type: {
      title: 'Type'
    },
    // conflict_policy: {
    //   title: 'Override Policy'
    // },
  },
  pager: {
    display: false
  },
  actions: {
    add: false,
    edit: false,
    delete: false
  },
  rowClassFunction: (row) => {
    if (row.data.highlight) {
      return 'hightlight-created-row';
      //   return 'score negative'; // Color from row with negative in score
      // } else if (row.data.type === '(+)') {
      //   return 'score positive';
    }
    return '';
  }};
  totalRecords: number = 10;
  currentPageNumber = 1;
  @ViewChild(KnowledgeBaseComponent) knowledgeBaseComponent: KnowledgeBaseComponent;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    private constantsService: ConstantsService) {
  }


  ngOnInit() {
    this.currentPageNumber = Number(this.activatedRoute.snapshot.queryParamMap.get('page') || '1');
    this.app$.subscribe((value) => {
      this.custumNerDataForSmartTable = value.enterpriseNerData;
    });
    this.recordsPerPage = this.utilityService.getSmartTableRowCountPerPageByViewportHeight();
    this.fetchNers(this.recordsPerPage, this.currentPageNumber - 1);
  }

  pageChanged$(currentPageNumber) {
    this.router.navigate(['.'], {queryParams: {page: currentPageNumber}, relativeTo: this.activatedRoute});
    this.currentPageNumber = currentPageNumber;
    this.fetchNers(this.recordsPerPage, currentPageNumber - 1);
  }

  fetchNers(limit: number = 10, offset: number = 0) {
    let getEnterpriseNerUrl = this.constantsService.getEnterpriseNer(limit, (offset * this.recordsPerPage));
    this.serverService.makeGetReq<{ meta: { total_count: number }, objects: ICustomNerItem[] }>({url: getEnterpriseNerUrl})
      .subscribe((value) => {
        this.totalRecords = value.meta.total_count;
        this.custumNerDataForSmartTable = value.objects;
        this.store.dispatch([
          new SetEnterpriseNerData({enterpriseNerData: this.custumNerDataForSmartTable})
        ]);

        /*For selected ner*/
        let selectedNerId = this.activatedRoute.snapshot.queryParamMap.get('ner_id');
        if (!selectedNerId) return;
        let getNerByIdUrl = this.constantsService.getCustomNerById(selectedNerId);
        let doesSelectedNerExistsIn_custumNerDataForSmartTable =
          this.custumNerDataForSmartTable.find(item => item.id === Number(selectedNerId));
        if (doesSelectedNerExistsIn_custumNerDataForSmartTable) return;
        this.serverService.makeGetReq({url: getNerByIdUrl})
          .subscribe((values: { objects: ICustomNerItem[] }) => {
            if (values.objects.length > 0) {
              this.custumNerDataForSmartTable.push(values.objects[0]);
              this.custumNerDataForSmartTable = [...this.custumNerDataForSmartTable];
            }
          });
      });
  }

  updateOrSaveCustomNer(selectedOrNewRowData: ICustomNerItem) {

    this.serverService.updateOrSaveCustomNer(selectedOrNewRowData)
      .subscribe((value: ICustomNerItem) => {
        // (<any>this.custumNerDataForSmartTable).push({...value,highlight:true});
        let indexToUpdate;
        if (value && value.id)
          indexToUpdate = this.custumNerDataForSmartTable.findIndex((custumNerDataForSmartTableItem) => custumNerDataForSmartTableItem.id === value.id);
        if (indexToUpdate >= 0)
          this.custumNerDataForSmartTable[indexToUpdate] = {...this.custumNerDataForSmartTable[indexToUpdate], ...value, highlight: true};
        else {
          this.custumNerDataForSmartTable.push({...value, highlight: true});
        }
        this.addQueryParamsInCurrentRoute({ner_id: value.id});
        this.utilityService.showSuccessToaster('Saved customner');
      });
  }

  addQueryParamsInCurrentRoute(queryParamObj: object) {
    this.router.navigate(['.'], {
      queryParams: queryParamObj,
      relativeTo: this.activatedRoute,
      // skipLocationChange: true,
      // queryParamsHandling:"merge"
    });
  }

  deleteNer(ner_id: number) {
    this.serverService.deleteNer(ner_id)
      .subscribe(() => {

        this.utilityService.showSuccessToaster('Deleted customner');
        this.router.navigate([`/core/customner`]);
        let indexToBeDeleted = this.custumNerDataForSmartTable.findIndex((nerObj) => nerObj.id == ner_id);
        if (indexToBeDeleted !== -1) this.custumNerDataForSmartTable.splice(indexToBeDeleted, 1);
        this.knowledgeBaseComponent.showNerSmartTable();
        this.custumNerDataForSmartTable = [...this.custumNerDataForSmartTable];
      });
  }

}
