
import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ConstantsService } from '../../constants.service';
import { ServerService } from '../../server.service';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { SetEnterpriseInfoAction, SetEnterpriseUsersAction } from './ngxs/enterpriseprofile.action';
import { IEnterpriseProfileInfo } from '../../../interfaces/enterprise-profile';
import { IHeaderData } from '../../../interfaces/header-data';
import { IEnterpriseUser } from '../interfaces/enterprise-users';
import { UtilityService } from '../../utility.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialTableImplementer } from '../../material-table-implementer';
import { MatDialog } from '@angular/material';
import { SetUser } from 'src/app/auth/ngxs/auth.action';

@Component({
  selector: 'app-enterpriseprofile',
  templateUrl: './enterpriseprofile.component.html',
  styleUrls: ['./enterpriseprofile.component.scss']
})
export class EnterpriseprofileComponent  implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  loggeduserenterpriseinfoMap$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;
  dialogRefWrapper = { ref: null };

  tableData;

  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_USER_DICT_TEMPLATE;
  }

  // initializeTableData(data: any, tableDataMetaDict: any): void {
  //   //
  //   this.tableData = super.transformDataForMaterialTable(data, this.getTableDataMetaDict());
  //   this.tableData = this.tableData.map((tableGataItem) => {
  //     //
  //     tableGataItem.Bots.value = tableGataItem.Bots.value.length + " bots assigned";
  //     tableGataItem.Actions.value = tableGataItem.Actions.value || [];
  //     tableGataItem.Actions.value.push({ show: true, name: 'modify', class: 'fa fa-edit mr-3 color-primary' });
  //     tableGataItem.Actions.value.push({ show: true, name: 'remove', class: 'fa fa-trash color-danger' });

  //     return tableGataItem;
  //   });
    //
    // this.
    // let sessionsDataForTable = super.transformDataForMaterialTable(session, this.getTableDataMetaDict());
    // sessionsDataForTable = sessionsDataForTable.map((sessionsDataForTableItem) => {
    //   /*adding two additional columns 1) actions and 2)channels*/
    //   let additonalColumns: any = {
    //     Actions:sessionsDataForTableItem['Actions'],
    //     Channels:sessionsDataForTableItem['Channels'],
    //   };

    //   additonalColumns['Actions'].value = additonalColumns['Actions'].value || [];
    //   additonalColumns['Channels'].value = additonalColumns['Channels'].value || [];
    //   /*actions*/
    //   additonalColumns['Actions'].value.push({show: true, name: 'download', class: 'fa fa-download'});
    //   if (sessionsDataForTableItem['originalSessionData']['data_encrypted']) {
    //     additonalColumns['Actions'].value.push({show: true, name: 'decrypt', class: 'fa fa-lock'});
    //   }    
    //   /*channels*/
    //   additonalColumns['Channels'].searchValue = sessionsDataForTableItem['Channels'].value.join();;
    //   additonalColumns['Channels'].value = (sessionsDataForTableItem.Channels['value'].map((channelName) => {
    //     return {
    //       name: channelName,
    //       src: this.constantsService.getIntegrationIconForChannelName(channelName).icon//'https://s3-eu-west-1.amazonaws.com/imibot-dev/integrations/web.png'
    //     };
    //   }));
    //   return {...sessionsDataForTableItem, ...additonalColumns};
    // });
    // return sessionsDataForTable;
  // }

  // openDeletModal(template: TemplateRef<any>) {

    // this.selectedPipeline = pipeline;
    // this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    // this.utilityService.openDangerModal(template, this.matDialog, this.dialogRefWrapper);
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  // }
  // openUserEditModal(template: TemplateRef<any>) {
  //   this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);

  // }
  // customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any }, enterpriseDeleteModal, ModifyUserModal) {
  //   if (data.action === 'remove') {
  //     this.openDeletModal(enterpriseDeleteModal);

  //   }
  //   if (data.action === 'modify') {
  //     this.openUserEditModal(ModifyUserModal);
  //   }
  // }
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;
  enterpriseUserBotList: number[];
  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private serverService: ServerService) {
    
  }
  // validateLogo(logo) {

  //   const formControl = new FormControl(logo);
  //   const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
  //   this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  // }

  formGroup: FormGroup;

  ngOnInit() {

    // this.formGroup = this.formBuilder.group({
    //   name: [''],
    //   industry: [''],
    //   logo: ['', [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
    //   email: [''],
    //   websiteUrl: [''],
    //   // enterpriseUniqueName: [''],
    //   tier_group: [''],
    //   log_retention_period: [''],
    // });

    // this.loggeduser$.subscribe(({ user }) => {
    //   this.userid = user.id;
    //   this.role = user.role.name;
    //   this.enterpriseId = user.enterprise_id; //enterprise_id
    //   const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(this.enterpriseId);
      // this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
      //   .subscribe((value: IEnterpriseProfileInfo) => {
      //     this.store.dispatch([
      //       new SetEnterpriseInfoAction({ enterpriseInfo: value })
      //     ]);
      //     // this.formGroup.patchValue(<any>value);
      //   });
      // if (this.role === 'Admin') {
      //   const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
      //   this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({ url: enterpriseUsersUrl })
      //     .subscribe((value) => {
      //       this.store.dispatch([
      //         new SetEnterpriseUsersAction({ enterpriseUsers: value.objects })
      //       ]);

      //       // this.initializeTableData(value.objects, this.getTableDataMetaDict());
      //     });
      // }

    // });

    // this.loggeduserenterpriseinfoMap$ =
    //   this.loggeduserenterpriseinfo$.pipe(
    //     map((value) => {
    //       return {
    //         ...value,
    //         enterpriseusers: value.enterpriseusers.map((enterpriseuser) => {

    //           // if (enterpriseuser.role_id == 2) {
    //           //   this.enterpriseUserBotList = enterpriseuser.bots;
    //           // }
    //           return {
    //             ...enterpriseuser,
    //             created_at: new Date(enterpriseuser.created_at).toLocaleDateString(),
    //             updated_at: new Date(enterpriseuser.updated_at).toLocaleDateString()
    //           };
    //         })
    //       };
    //     }));
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

//   updateEnterpriseProfile() {
//     const formData = this.formGroup.value;
//     const body: IEnterpriseProfileInfo = { ...this.loggeduserenterpriseinfo, ...formData };
//     const url = this.constantsService.getEnterpriseUrl(this.enterpriseId);
//     const headerData: IHeaderData = { 'content-type': 'application/json' };
//     this.serverService.makePutReq({ url, body, headerData })
//       .subscribe(() => {
//         this.utilityService.showSuccessToaster('Updated enterprise profile');
//         this.store.dispatch([
//           new SetEnterpriseInfoAction({ enterpriseInfo: body }),
//         ]).subscribe((entprisedetails) => {
//           let enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
//           let enterpriseBody = {
//             "user_id": entprisedetails[0].loggeduser.user.id,
//             "enterprise_id": entprisedetails[0].loggeduser.user.enterprise_id ,
//             "role_id": entprisedetails[0].loggeduser.user.role_id
//           }
//           this.serverService.makePostReq<any>({ url: enterpriseLoginUrl, body : enterpriseBody, headerData })
//             .subscribe((value) => {
//               this.store.dispatch([
//                 new SetUser({ user: value }),
//               ])
//               // this.gotUserData$.emit(value);
//             });
//         });
//         });
  
// }

log(z) {
  console.log(z);
}



}
