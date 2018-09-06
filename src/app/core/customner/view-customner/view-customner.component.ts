import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-view-customner',
  templateUrl: './view-customner.component.html',
  styleUrls: ['./view-customner.component.scss']
})
export class ViewCustomnerComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() app$: Observable<IAppState>;
  custumNerDataForSmartTable: ICustomNerItem[];
  settings = this.constantsService.SMART_TABLE_KNOWLEDGEBASE_SETTING;
  totalRecords:number = 10;
  currentPageNumber = 1;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    private constantsService: ConstantsService) {
  }


  ngOnInit() {
    this.currentPageNumber = Number(this.activatedRoute.snapshot.queryParamMap.get('page') ||'1');
    this.fetchNers(10, this.currentPageNumber-1);
    this.app$.subscribe((value)=>{
      this.custumNerDataForSmartTable = value.enterpriseNerData;
    })
  }

  pageChanged$(currentPageNumber) {
    this.router.navigate(['.'], {queryParams:{page:currentPageNumber}, relativeTo:this.activatedRoute});
    this.currentPageNumber = currentPageNumber;
    this.fetchNers(10, currentPageNumber-1);
  }

  fetchNers(limit: number = 10, offset: number = 0) {
    let getEnterpriseNerUrl = this.constantsService.getEnterpriseNer(limit, (offset*10));
    this.serverService.makeGetReq<{ meta: {total_count:number}, objects: ICustomNerItem[] }>({url: getEnterpriseNerUrl})
      .subscribe((value) => {
        this.totalRecords = value.meta.total_count;
        this.custumNerDataForSmartTable = value.objects;
        this.store.dispatch([
          new SetEnterpriseNerData({enterpriseNerData: this.custumNerDataForSmartTable})
        ]);

        /*For selected ner*/
        let selectedNerId = this.activatedRoute.snapshot.queryParamMap.get('ner_id');
        if(!selectedNerId)return;
        let getNerByIdUrl = this.constantsService.getCustomNerById(selectedNerId);
        let doesSelectedNerExistsIn_custumNerDataForSmartTable =
        this.custumNerDataForSmartTable.find(item=>item.id===Number(selectedNerId));
        if(doesSelectedNerExistsIn_custumNerDataForSmartTable) return;
        this.serverService.makeGetReq({url: getNerByIdUrl})
          .subscribe((values:{objects:ICustomNerItem[]})=>{
            if(values.objects.length>0){
              this.custumNerDataForSmartTable.push(values.objects[0]);
              this.custumNerDataForSmartTable = [...this.custumNerDataForSmartTable];
            }
          });
      });
  }

  updateOrSaveCustomNer(selectedOrNewRowData: ICustomNerItem) {
    this.serverService.updateOrSaveCustomNer(selectedOrNewRowData)
      .subscribe((value:ICustomNerItem) => {
        (<any>this.custumNerDataForSmartTable).push({...value,highlight:true});
        this.addQueryParamsInCurrentRoute({ner_id:value.id});
        this.utilityService.showSuccessToaster('Successfully saved');
      });
  }

  addQueryParamsInCurrentRoute(queryParamObj:object){
    this.router.navigate(['.'], {
      queryParams:queryParamObj,
      relativeTo:this.activatedRoute,
      // skipLocationChange: true,
      // queryParamsHandling:"merge"
    });
  }

}
