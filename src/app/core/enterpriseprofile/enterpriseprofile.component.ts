import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {SetEnterpriseInfoAction, SetEnterpriseUsersAction} from './ngxs/enterpriseprofile.action';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {IHeaderData} from '../../../interfaces/header-data';
import {IEnterpriseUser} from '../interfaces/enterprise-users';

@Component({
  selector: 'app-enterpriseprofile',
  templateUrl: './enterpriseprofile.component.html',
  styleUrls: ['./enterpriseprofile.component.scss']
})
export class EnterpriseprofileComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;

  userid: string;
  enterpriseId: string;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;

  constructor(private store: Store, private constantsService: ConstantsService, private serverService: ServerService) {
  }

  ngOnInit() {
    this.loggeduser$.subscribe(({user}) => {
      this.userid = user.id;
      this.enterpriseId = user.enterpriseId;
      let url = this.constantsService.getEnterpriseUrl(this.userid);
      this.serverService.makeGetReq<IEnterpriseProfileInfo>({url: url})
        .subscribe((value: IEnterpriseProfileInfo) => {
          this.store.dispatch([
            new SetEnterpriseInfoAction({enterpriseInfo: value})
          ]);
        });
    });

    this.loggeduserenterpriseinfo$.subscribe((value) => {
      this.loggeduserenterpriseinfo = value;
    });

    let headerData: IHeaderData = {'content-type': 'application/json'};
    let enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
    this.serverService.makeGetReq<{users:IEnterpriseUser[]}>({url: enterpriseUsersUrl, headerData})
      .subscribe((enterpriseUsers) => {
        console.log(enterpriseUsers);
        this.store.dispatch([
          new SetEnterpriseUsersAction({enterpriseUsers: enterpriseUsers.users})
        ]);
      });
  }

  saveForm() {
    let formData = this.f.value;
    let body: IEnterpriseProfileInfo = {...this.loggeduserenterpriseinfo, ...formData};
    let url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
    let headerData: IHeaderData = {'content-type': 'application/json'};
    this.serverService.makePutReq({url, body, headerData})
      .subscribe(() => {
        this.store.dispatch([
          new SetEnterpriseInfoAction({enterpriseInfo: body})
        ]);
      });
  }

}
