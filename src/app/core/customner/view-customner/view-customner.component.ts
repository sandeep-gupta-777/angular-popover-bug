import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {ConstantsService} from '../../../constants.service';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {ICustomNerItem} from '../../../../interfaces/custom-ners';
import {IHeaderData} from '../../../../interfaces/header-data';

@Component({
  selector: 'app-view-customner',
  templateUrl: './view-customner.component.html',
  styleUrls: ['./view-customner.component.scss']
})
export class ViewCustomnerComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  enterpriseNerData: ICustomNerItem[];
  settings = this.constantsService.SMART_TABLE_KNOWLEDGEBASE_SETTING;


  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService) {
  }


  ngOnInit() {
    this.getNers();
  }

  pageChanged$(pageNumber) {
    this.getNers(10, pageNumber);
  }

  getNers(limit: number = 100, offset: number = 0) {
    let getEnterpriseNerUrl = this.constantsService.getEnterpriseNer(limit, offset);
    this.serverService.makeGetReq<{ meta: any, objects: ICustomNerItem[] }>({url: getEnterpriseNerUrl})
      .subscribe((value) => {
        this.enterpriseNerData = value.objects;
      });
  }

}
