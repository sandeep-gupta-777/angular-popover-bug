
import {map} from 'rxjs/operators';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {SetEnterpriseInfoAction, SetEnterpriseUsersAction} from './ngxs/enterpriseprofile.action';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {IHeaderData} from '../../../interfaces/header-data';
import {IEnterpriseUser} from '../interfaces/enterprise-users';
import {UtilityService} from '../../utility.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-enterpriseprofile',
  templateUrl: './enterpriseprofile.component.html',
  styleUrls: ['./enterpriseprofile.component.scss']
})
export class EnterpriseprofileComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  loggeduserenterpriseinfoMap$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;

  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;

  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private serverService: ServerService) {
  }
  validateLogo(logo) {

    const formControl = new FormControl(logo);
    const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
    this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  }

  ngOnInit() {
    this.loggeduser$.subscribe(({user}) => {
      this.userid = user.id;
      this.role = user.role.name;
      this.enterpriseId = user.enterprise_id; //enterprise_id
      const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(this.enterpriseId);
      this.serverService.makeGetReq<IEnterpriseProfileInfo>({url: enterpriseProfileUrl})
        .subscribe((value: IEnterpriseProfileInfo) => {
          this.store.dispatch([
            new SetEnterpriseInfoAction({enterpriseInfo: value})
          ]);
        });
      if (this.role === 'Admin') {
        const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({url: enterpriseUsersUrl})
          .subscribe((value) => {
            this.store.dispatch([
              new SetEnterpriseUsersAction({enterpriseUsers: value.objects})
            ]);
          });
      }

    });

    this.loggeduserenterpriseinfoMap$ =
    this.loggeduserenterpriseinfo$.pipe(
      map((value) => {
        return {
          ...value,
          enterpriseusers: value.enterpriseusers.map((enterpriseuser) => {
            return {
              ...enterpriseuser,
              created_at: new Date(enterpriseuser.created_at).toLocaleDateString(),
              updated_at: new Date(enterpriseuser.updated_at).toLocaleDateString()
            };
          })
        };
      }));
      // .subscribe((value) => {
      // this.loggeduserenterpriseinfo = value;
      // ;
    // });

    // let headerData: IHeaderData = {'content-type': 'application/json'};
    // let enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
    // this.serverService.makeGetReq<{users:IEnterpriseUser[]}>({url: enterpriseUsersUrl, headerData})
    //   .subscribe((enterpriseUsers) => {
    //     this.store.dispatch([
    //       new SetEnterpriseUsersAction({enterpriseUsers: enterpriseUsers.users})
    //     ]);
    //   });
  }

  updateEnterpriseProfile() {
    const formData = this.f.value;
    const body: IEnterpriseProfileInfo = {...this.loggeduserenterpriseinfo, ...formData};
    const url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
    const headerData: IHeaderData = {'content-type': 'application/json'};
    this.serverService.makePutReq({url, body, headerData})
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Updated enterprise profile');
        this.store.dispatch([
          new SetEnterpriseInfoAction({enterpriseInfo: body}),
        ]);
      });
  }

}
