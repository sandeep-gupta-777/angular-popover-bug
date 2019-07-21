import {Component, OnInit, ViewChild} from '@angular/core';
import {ConstantsService} from 'src/app/constants.service';
import {UtilityService} from 'src/app/utility.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ServerService} from 'src/app/server.service';
import {Select, Store} from '@ngxs/store';
import {IEnterpriseProfileInfo} from 'src/interfaces/enterprise-profile';
import {
  SetEnterpriseInfoAction,
  SetEnterpriseServiceKeyAction,
  SetEnterpriseUsersAction
} from '../ngxs/enterpriseprofile.action';
import {SetUser} from 'src/app/auth/ngxs/auth.action';
import {IHeaderData} from 'src/interfaces/header-data';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {IEnterpriseUser} from '../../interfaces/enterprise-users';
import {map} from 'rxjs/operators';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {EnterpriseOverviewSmartTable} from './enterprise-overview-smart-table';
import {ESortDir} from '../../../smart-table/smart-table.component';

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
  @ViewChild('descriptionForm') descriptionForm: NgForm;
  serviceKeyTableDataExpired = [];
  serviceKeyTableDataActive = [];
  serviceKeys = [];
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  showActiveServiceKeysTable = true;
  expireServicekeyData;
  logoError;
  enterpriseUserBotList: number[];
  dialogRefWrapper = {ref: null};
  logdeletionsummary: [];
  serviceKeyExpiredTableModal: EnterpriseOverviewSmartTable;
  serviceKeyActiveTableModal: EnterpriseOverviewSmartTable;
  myESortDir = ESortDir;
  formGroup: FormGroup;

  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private serverService: ServerService
  ) {
  }

  validateLogo(logo) {
    const formControl = new FormControl(logo);
    const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
    this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  }

  openNewServiceKeyModal() {

    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'primary-modal-header-border',
      data: {
        actionButtonText: 'Create',
        message: `Provide a description for the new service key`,
        title: 'New service key',
        isActionButtonDanger: false,
        inputDescription: 'Description'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {

      if (data) {
        this.addNewServiceKey(data);
      }
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }

  getTableDataMetaDictActive(): any {
    return this.constantsService.SMART_TABLE_SERVICE_KEY_ACTIVE;
  }

  getTableDataMetaDictExpired(): any {
    return this.constantsService.SMART_TABLE_SERVICE_KEY_EXPIRED;
  }

  addNewServiceKey(description) {
    // enterprise/generate_service_key/
    const generateServiceKeyUrl = this.constantsService.generateServiceKeyUrl();
    const body = {'description': description};

    const headerData: IHeaderData = {'content-type': 'application/json'};

    this.serverService.makePostReq<any>({url: generateServiceKeyUrl, body, headerData})
      .subscribe((value) => {
        this.serviceKeys.push(value);
        this.serviceKeys = [...this.serviceKeys];
        this.utilityService.showSuccessToaster('New service key added successfully');
        this.store.dispatch([
          new SetEnterpriseServiceKeyAction({service_key: this.serviceKeys})
        ]);
      });
  }

  enterpriseOverViewTableFactory(data, metaData) {
    return new EnterpriseOverviewSmartTable(data, metaData);
  }

  ngOnInit() {
    this.serviceKeyActiveTableModal = this.enterpriseOverViewTableFactory(this.serviceKeyTableDataActive, this.getTableDataMetaDictActive());
    this.serviceKeyExpiredTableModal = this.enterpriseOverViewTableFactory(this.serviceKeyTableDataExpired, this.getTableDataMetaDictExpired());
    this.formGroup = this.formBuilder.group({
      name: [''],
      industry: [''],
      logo: ['', [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
      email: [''],
      // websiteUrl: [''],
      enterprise_unique_name: [''],
      tier_group: [''],
      log_retention_period: [''],
    });

    this.loggeduser$.subscribe(({user}) => {
      if (!user) {
        return;
      }
      this.userid = user.id;
      this.role = user.role.name;
      this.enterpriseId = user.enterprise_id;
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

          });
      }

    });

    this.loggeduserenterpriseinfoMap$ =
      this.loggeduserenterpriseinfo$.pipe(
        map((value) => {

          return {
            ...value,
            enterpriseusers: value.enterpriseusers.map((enterpriseuser) => {

              if (enterpriseuser.role_id === 2) {
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
    this.loggeduserenterpriseinfo$
      .subscribe((enterprise) => {
        this.serviceKeys = enterprise.service_key;
        let expiredTableData = enterprise.service_key.filter(data => data.enabled !== true);
        expiredTableData = expiredTableData.filter(data => typeof data.description === 'string');
        expiredTableData.sort(function (a, b) {
          return -a.created_at + b.created_at;
        });
        let activeTableData = enterprise.service_key.filter(data => data.enabled === true);
        activeTableData = activeTableData.filter(data => typeof data.description === 'string');
        activeTableData.sort(function (a, b) {
          return -a.expired_at + b.expired_at;
        });

        this.serviceKeyActiveTableModal.refreshData(activeTableData);
        this.serviceKeyExpiredTableModal.refreshData(expiredTableData);
      });
    const enterpriselogdeletionsummary = this.constantsService.getEnterpriseLogDeletionSummaryUrl();
    this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({url: enterpriselogdeletionsummary})
      .subscribe((value) => {
        this.logdeletionsummary = value.objects.reverse();
      });
  }

  updateEnterpriseProfile() {
    const formData = this.formGroup.value;
    const body: IEnterpriseProfileInfo = {...this.loggeduserenterpriseinfo, ...formData};
    delete body.service_key;
    const url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
    const headerData: IHeaderData = {'content-type': 'application/json'};
    this.serverService.makePutReq({url, body, headerData})
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Enterprise profile updated');
        this.store.dispatch([
          new SetEnterpriseInfoAction({enterpriseInfo: body}),
        ]).subscribe((entprisedetails) => {
          const enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
          const enterpriseBody = {
            'user_id': entprisedetails[0].loggeduser.user.id,
            'enterprise_id': entprisedetails[0].loggeduser.user.enterprise_id,
            'role_id': entprisedetails[0].loggeduser.user.role_id
          };
          this.serverService.makePostReq<any>({url: enterpriseLoginUrl, body: enterpriseBody, headerData})
            .subscribe((value) => {
              this.store.dispatch([
                new SetUser({user: value}),
              ]);

            });
        });
      });

  }

  expireServiceKey() {
    const data = this.expireServicekeyData;
    // console.log(data.data)
    const disableServiceKeyUrl = this.constantsService.disableServiceKeyUrl();
    const body = {service_key: this.expireServicekeyData.key};
    const headerData: IHeaderData = {'content-type': 'application/json'};
    //
    this.serverService.makePostReq<any>({url: disableServiceKeyUrl, body, headerData})
      .subscribe((value) => {
        this.serviceKeys = this.serviceKeys.map((item) => {
          if (item['key'] === body.service_key) {
            return value;
          } else {
            return item;
          }
        });
        this.serviceKeys = [...this.serviceKeys];
        this.utilityService.showSuccessToaster('Service key has been successfully expired');
        this.store.dispatch([
          new SetEnterpriseServiceKeyAction({service_key: this.serviceKeys})
        ]);
      });
  }

  customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any }) {

    if (data.action === 'expire') {
      this.expireServicekeyData = data.data;
      this.utilityService.openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr: 'danger-modal-header-border',
        data: {
          actionButtonText: 'Expire',
          message: 'Do you want to expire the selected access token',
          title: 'Expire token?',
          isActionButtonDanger: true
        },
        dialog: this.matDialog,
        component: ModalConfirmComponent
      }).then((data_temp) => {
        if (data_temp) {
          this.expireServiceKey();
        }
      });
    }
  }

  dataValueClicked(dataValue) {
    this.utilityService.copyToClipboard(dataValue);
  }

}
