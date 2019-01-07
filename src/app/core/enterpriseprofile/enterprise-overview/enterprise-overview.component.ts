import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { UtilityService } from 'src/app/utility.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
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
import { MaterialTableImplementer } from 'src/app/material-table-implementer';
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
  serviceKeyTableDataExpired =  [];
  serviceKeyTableDataActive = [];
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  showActiveServiceKeysTable: boolean = true;
  logoError;
  enterpriseUserBotList: number[];
  dialogRefWrapper = { ref: null };
  logdeletionsummary: [];
  descriptionServiceKey:string;
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
    if (data.length == 0) {
      return null;
    }
// debugger;
    let x =  data.map((consumerTableDataItem) => {
      let obj: any = {};
      // debugger;

      for (let key in tableDataMetaDict) {
        // debugger;

        if (key == 'key' || key == 'description') {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: consumerTableDataItem[key].substring(0, 50),
            searchValue: consumerTableDataItem[key]
          };
        }
        else if (key == 'created_at' || key == 'expired_at') {
          if (consumerTableDataItem[key]) {
            let time = new Date(consumerTableDataItem[key]);
            obj[tableDataMetaDict[key].displayValue] = {
              ...tableDataMetaDict[key],
              originalKey: key,
              value: time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear(),
              searchValue: time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear()
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
    // debugger;
    return x;
  }
  addNewServiceKey() {
    // enterprise/generate_service_key/
    let generateServiceKeyUrl = this.constantsService.generateServiceKeyUrl();
    let body = this.descriptionForm.value ;
    
    console.log("descriptionForm.value" ,this.descriptionForm.value)
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    
    this.serverService.makePostReq<any>({ url: generateServiceKeyUrl, body, headerData })
      .subscribe((value) => {
        

        let temp = this.transformDataForMaterialTable([value], this.getTableDataMetaDictActive());
        
        this.serviceKeyTableDataExpired.push(temp[0]);
        this.serviceKeyTableDataExpired = [...this.serviceKeyTableDataExpired];
        // this.serviceKeyTableDataExpired = this.serviceKeyTableDataExpired.filter(data => data.age > 18)
        // this.serviceKeyTableDataActive = this.transformDataForMaterialTable(array, this.getTableDataMetaDictActive());

      });
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
            ])
              .subscribe((value) => {
                debugger;
                let expiredTableData = value[0].loggeduserenterpriseinfo.service_key.filter(data => data.enabled == true);
                expiredTableData = expiredTableData.filter(data => typeof data.description == "string");

                
                let activeTableData = value[0].loggeduserenterpriseinfo.service_key.filter(data => data.enabled != true);
                activeTableData = activeTableData.filter(data => typeof data.description == "string");

                this.serviceKeyTableDataExpired = this.transformDataForMaterialTable(expiredTableData, this.getTableDataMetaDictActive());
                debugger;
                // this.serviceKeyTableDataExpired = this.serviceKeyTableDataExpired.filter(data => data.age > 18)
                this.serviceKeyTableDataActive = this.transformDataForMaterialTable(activeTableData, this.getTableDataMetaDictExpired());


              });
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

    const enterpriselogdeletionsummary = this.constantsService.getEnterpriseLogDeletionSummaryUrl();
    this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({ url: enterpriselogdeletionsummary })
      .subscribe((value) => {
        this.logdeletionsummary = value.objects;
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
        this.utilityService.showSuccessToaster('Updated enterprise profile');
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

  customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any }) {
    if (data.action === 'expire') {
      // console.log(data.data)
    let disableServiceKeyUrl = this.constantsService.disableServiceKeyUrl();
    let body = { service_key : data.data.key }
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    // 
    this.serverService.makePostReq<any>({ url: disableServiceKeyUrl, body, headerData })
      .subscribe((value) => {
        console.log(value);
        this.serviceKeyTableDataExpired = this.serviceKeyTableDataExpired.filter((item) => item["Token Id"].searchValue !== body.service_key);
        this.serviceKeyTableDataExpired = [...this.serviceKeyTableDataExpired];
        // this.serviceKeyTableDataExpired = this.serviceKeyTableDataExpired.filter(data => data.age > 18)
        // this.serviceKeyTableDataActive = this.transformDataForMaterialTable(array, this.getTableDataMetaDictActive());
        let temp = this.transformDataForMaterialTable([data.data], this.getTableDataMetaDictExpired());
        
        this.serviceKeyTableDataActive.push(temp[0]);
        this.serviceKeyTableDataActive = [...this.serviceKeyTableDataActive];
      });
      

    }
    // if (data.action === 'modify') {
    //   this.openUserEditModal(ModifyUserModal);
    // }
  }


}
