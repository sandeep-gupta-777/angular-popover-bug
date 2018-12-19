import { Component, OnInit, ViewChild } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { UtilityService } from 'src/app/utility.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ServerService } from 'src/app/server.service';
import { Select, Store } from '@ngxs/store';
import { IEnterpriseProfileInfo } from 'src/interfaces/enterprise-profile';
import { SetEnterpriseInfoAction, SetEnterpriseUsersAction } from '../ngxs/enterpriseprofile.action';
import { SetUser } from 'src/app/auth/ngxs/auth.action';
import { IHeaderData } from 'src/interfaces/header-data';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { IEnterpriseUser } from '../../interfaces/enterprise-users';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-enterprise-overview',
  templateUrl: './enterprise-overview.component.html',
  styleUrls: ['./enterprise-overview.component.scss']
})
export class EnterpriseOverviewComponent implements OnInit {
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  loggeduserenterpriseinfoMap$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;
  tableData;
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;
  enterpriseUserBotList: number[];
  dialogRefWrapper = { ref: null };

  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private serverService: ServerService
  ) { }
  validateLogo(logo) {
    const formControl = new FormControl(logo);
    const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
    this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  }
  
  formGroup: FormGroup;
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      industry: [''],
      logo: ['', [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
      email: [''],
      websiteUrl: [''],
      // enterpriseUniqueName: [''],
      tier_group: [''],
      log_retention_period: [''],
    });

    this.loggeduser$.subscribe(({ user }) => {
      this.userid = user.id;
      this.role = user.role.name;
      this.enterpriseId = user.enterprise_id; //enterprise_id
      const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(this.enterpriseId);
      this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
        .subscribe((value: IEnterpriseProfileInfo) => {
          this.store.dispatch([
            new SetEnterpriseInfoAction({ enterpriseInfo: value })
          ]);
          this.formGroup.patchValue(<any>value);
        });
      if (this.role === 'Admin') {
        const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({ url: enterpriseUsersUrl })
          .subscribe((value) => {
            this.store.dispatch([
              new SetEnterpriseUsersAction({ enterpriseUsers: value.objects })
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

              if (enterpriseuser.role_id == 2) {
                this.enterpriseUserBotList = enterpriseuser.bots;
              }
              return {
                ...enterpriseuser,
                created_at: new Date(enterpriseuser.created_at).toLocaleDateString(),
                updated_at: new Date(enterpriseuser.updated_at).toLocaleDateString()
              };
            })
          };
        }));
  }
  updateEnterpriseProfile() {
    const formData = this.formGroup.value;
    const body: IEnterpriseProfileInfo = { ...this.loggeduserenterpriseinfo, ...formData };
    const url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    this.serverService.makePutReq({ url, body, headerData })
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Updated enterprise profile');
        this.store.dispatch([
          new SetEnterpriseInfoAction({ enterpriseInfo: body }),
        ]).subscribe((entprisedetails) => {
          let enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
          let enterpriseBody = {
            "user_id": entprisedetails[0].loggeduser.user.id,
            "enterprise_id": entprisedetails[0].loggeduser.user.enterprise_id ,
            "role_id": entprisedetails[0].loggeduser.user.role_id
          }
          this.serverService.makePostReq<any>({ url: enterpriseLoginUrl, body : enterpriseBody, headerData })
            .subscribe((value) => {
              this.store.dispatch([
                new SetUser({ user: value }),
              ])
              // this.gotUserData$.emit(value);
            });
        });
        });
  
}

}
