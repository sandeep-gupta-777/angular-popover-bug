
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
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaterialTableImplementer} from '../../material-table-implementer';

@Component({
  selector: 'app-enterpriseprofile',
  templateUrl: './enterpriseprofile.component.html',
  styleUrls: ['./enterpriseprofile.component.scss']
})
export class EnterpriseprofileComponent extends MaterialTableImplementer implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  loggeduserenterpriseinfoMap$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;

  tableData;

  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_USER_DICT_TEMPLATE;
  }

  initializeTableData(data: any, tableDataMetaDict: any): void {
    this.tableData = this.transformDataForMaterialTable(data, this.getTableDataMetaDict());
  }

  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;

  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private serverService: ServerService) {
    super();
  }
  validateLogo(logo) {

    const formControl = new FormControl(logo);
    const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
    this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  }

  formGroup:FormGroup;

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      name:  [''],
      industry:  [''],
      logo: ['',[Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
      email: [''],
      websiteUrl: [''],
      // enterpriseUniqueName: [''],
      tier_group: [''],
      log_retention_period: [''],
    });

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
          this.formGroup.patchValue(<any>value);
        });
      if (this.role === 'Admin') {
        const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({url: enterpriseUsersUrl})
          .subscribe((value) => {
            this.store.dispatch([
              new SetEnterpriseUsersAction({enterpriseUsers: value.objects})
            ]);

            this.initializeTableData(value.objects, this.getTableDataMetaDict());
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
    const formData = this.formGroup.value;
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

  log(z){
    console.log(z);
  }



}
