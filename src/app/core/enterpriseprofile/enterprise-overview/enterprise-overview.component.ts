import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { UtilityService } from 'src/app/utility.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ServerService } from 'src/app/server.service';
import { Select, Store } from '@ngxs/store';
import { IEnterpriseProfileInfo } from 'src/interfaces/enterprise-profile';
import { SetEnterpriseInfoAction, SetEnterpriseUsersAction, SetEnterpriseServiceKeyAction } from '../ngxs/enterpriseprofile.action';
import { SetUser } from 'src/app/auth/ngxs/auth.action';
import { IHeaderData } from 'src/interfaces/header-data';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { IEnterpriseUser } from '../../interfaces/enterprise-users';
import { map } from 'rxjs/operators';
import { MaterialTableImplementer } from 'src/app/material-table-implementer';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-enterprise-overview',
  templateUrl: './enterprise-overview.component.html',
  styleUrls: ['./enterprise-overview.component.scss']
})
export class EnterpriseOverviewComponent  implements OnInit {
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
  showActiveServiceKeysTable: boolean = true;
  expireServicekeyData;
  logoError;
  enterpriseUserBotList: number[];
  dialogRefWrapper = { ref: null };
  logdeletionsummary: [];
  descriptionServiceKey: string;
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
  openNewServiceKeyModal(template: TemplateRef<any>) {

    // this.selectedPipeline = pipeline;
    // this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }
  getTableDataMetaDictActive(): any {
    return this.constantsService.SMART_TABLE_SERVICE_KEY_ACTIVE;
  }
  getTableDataMetaDictExpired(): any {
    return this.constantsService.SMART_TABLE_SERVICE_KEY_EXPIRED;
  }
  transformDataForMaterialTable(data: any[], tableDataMetaDict: any) {
    if (!data) {
      return null;
    }
    if (data.length == 0) {
      return null;
    }
    if (data.length == 1 && data[0] == {}) {
      return null;
    }
    //
    let x = data.map((consumerTableDataItem) => {
      let obj: any = {};
      //

      for (let key in tableDataMetaDict) {
        //||

        if (key == 'key' ) {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            // value: consumerTableDataItem[key].substring(0, 50),
            value: `<div class="d-flex cursor-pointer">
                        <i class="fa fa-copy" data-value="${consumerTableDataItem[key]}" ></i> 
                        <span>${consumerTableDataItem[key]}</span>
                     </div>`,
            searchValue: consumerTableDataItem[key]
          };
        }else if (key == 'description') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            // value: consumerTableDataItem[key].substring(0, 50),
            value: consumerTableDataItem[key],
            searchValue: consumerTableDataItem[key]
          };
        }
        else if (key == 'created_at' || key == 'expired_at') {
          if (consumerTableDataItem[key]) {
            let time = new Date(consumerTableDataItem[key]);
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: time.getDate() + " " + time.toLocaleString('en-us', { month: 'short' }) + " " + time.getFullYear().toString().substr(-2),
              searchValue: time.getDate() + " " + time.toLocaleString('en-us', { month: 'short' }) + " " + time.getFullYear().toString().substr(-2)
            };
          }
          else {
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: "No Data",
              searchValue: "No Data"
            };
          }

        }
        else if (key == 'actions') {

          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: [{ show: true, name: 'expire', class: 'fa fa-minus-circle color-danger' }],
            searchValue: consumerTableDataItem[key]
          };
        }
        else {

          if (consumerTableDataItem[key]) {
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: consumerTableDataItem[key],
              searchValue: consumerTableDataItem[key]
            };
          }
          else {
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: "No Data",
              searchValue: "No Data"
            };
          }


        }


      }
      obj.originalSessionData = consumerTableDataItem;
      // console.log("ttttttttt", obj);
      return obj;
    });
    //
    return x;
  }
  addNewServiceKey() {
    // enterprise/generate_service_key/
    let generateServiceKeyUrl = this.constantsService.generateServiceKeyUrl();
    let body = this.descriptionForm.value;

    console.log("descriptionForm.value", this.descriptionForm.value)
    const headerData: IHeaderData = { 'content-type': 'application/json' };

    this.serverService.makePostReq<any>({ url: generateServiceKeyUrl, body, headerData })
      .subscribe((value) => {


        this.serviceKeys.push(value);
        this.serviceKeys = [...this.serviceKeys];

        this.utilityService.showSuccessToaster("New service key added successfully");
        this.store.dispatch([
          new SetEnterpriseServiceKeyAction({ service_key: this.serviceKeys })
        ])
      });
  }
  formGroup: FormGroup;
  ngOnInit() {
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
            ])

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
    this.loggeduserenterpriseinfo$
      .subscribe((enterprise) => {


        this.serviceKeys = enterprise.service_key;

        //  if(this.serviceKeys.length > 0){

        let expiredTableData = enterprise.service_key.filter(data => data.enabled == true);
        expiredTableData = expiredTableData.filter(data => typeof data.description == "string");
        expiredTableData.sort(function(a, b){
          return -a.created_at+b.created_at
      })
        let activeTableData = enterprise.service_key.filter(data => data.enabled != true);
        activeTableData = activeTableData.filter(data => typeof data.description == "string");
        activeTableData.sort(function(a, b){
          return -a.expired_at+b.expired_at
      })
        this.serviceKeyTableDataExpired = this.transformDataForMaterialTable(expiredTableData, this.getTableDataMetaDictActive());
debugger;
        this.serviceKeyTableDataActive = this.transformDataForMaterialTable(activeTableData, this.getTableDataMetaDictExpired());
debugger;

      });
    const enterpriselogdeletionsummary = this.constantsService.getEnterpriseLogDeletionSummaryUrl();
    this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({ url: enterpriselogdeletionsummary })
      .subscribe((value) => {
        this.logdeletionsummary = value.objects.reverse();
      });
  }
  updateEnterpriseProfile() {
    const formData = this.formGroup.value;
    const body: IEnterpriseProfileInfo = { ...this.loggeduserenterpriseinfo, ...formData };
    delete body.service_key;
    const url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    this.serverService.makePutReq({ url, body, headerData })
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Enterprise profile updated');
        this.store.dispatch([
          new SetEnterpriseInfoAction({ enterpriseInfo: body }),
        ]).subscribe((entprisedetails) => {
          let enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
          let enterpriseBody = {
            "user_id": entprisedetails[0].loggeduser.user.id,
            "enterprise_id": entprisedetails[0].loggeduser.user.enterprise_id,
            "role_id": entprisedetails[0].loggeduser.user.role_id
          }
          this.serverService.makePostReq<any>({ url: enterpriseLoginUrl, body: enterpriseBody, headerData })
            .subscribe((value) => {
              this.store.dispatch([
                new SetUser({ user: value }),
              ])
              // this.gotUserData$.emit(value);
            });
        });
      });

  }
  expireServiceKey(){
    let data = this.expireServicekeyData;
    // console.log(data.data)
    debugger;
      let disableServiceKeyUrl = this.constantsService.disableServiceKeyUrl();
      let body = { service_key: this.expireServicekeyData.key }
      const headerData: IHeaderData = { 'content-type': 'application/json' };
      //
      this.serverService.makePostReq<any>({ url: disableServiceKeyUrl, body, headerData })
        .subscribe((value) => {

          this.serviceKeys = this.serviceKeys.map((item) => {
            if (item["key"] == body.service_key) {
              return value;
            }
            else {
              return item;
            }
          });
          this.serviceKeys = [...this.serviceKeys];
          this.utilityService.showSuccessToaster("Service key has been successfully expired");
          this.store.dispatch([
            new SetEnterpriseServiceKeyAction({ service_key: this.serviceKeys })
          ])
        });
  }
  customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any },expireServiceKeyModal) {
    if (data.action === 'expire') {
      this.expireServicekeyData = data.data;
      this.utilityService.openDangerModal(expireServiceKeyModal, this.matDialog, this.dialogRefWrapper);
    }
  }
<<<<<<< HEAD

  dataValueClicked(dataValue){
    this.utilityService.copyToClipboard(dataValue);
  }


=======
>>>>>>> a0e2f4cd8d3f25195e4fb64887c4988fa5d56f25
}
