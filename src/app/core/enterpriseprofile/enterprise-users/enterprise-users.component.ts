import { IEnterpriseProfileInfo } from "src/interfaces/enterprise-profile";
import { SetEnterpriseInfoAction, SetEnterpriseUsersAction } from "../ngxs/enterpriseprofile.action";
import { IEnterpriseUser } from "../../interfaces/enterprise-users";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Store, Select } from "@ngxs/store";
import { ConstantsService } from "src/app/constants.service";
import { UtilityService } from "src/app/utility.service";
import { MatDialog } from "@angular/material";
import { ServerService } from "src/app/server.service";
import { MaterialTableImplementer } from "src/app/material-table-implementer";
import { OnInit, ViewChild, Component, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../../interfaces/user";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-enterprise-users',
  templateUrl: './enterprise-users.component.html',
  styleUrls: ['./enterprise-users.component.scss']
})
export class EnterpriseUsersComponent extends MaterialTableImplementer implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  loggeduserenterpriseinfoMap$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;
  dialogRefWrapper = { ref: null };
  tableData;
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;
  enterpriseUserBotList: number[];
  formGroup: FormGroup;
  roleMap: any;
  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_USER_DICT_TEMPLATE;
  }
  roleIdToRoleName(roleId: number) {
    let thisRole = this.roleMap.find(role => role.id == roleId);
    if(thisRole){
      return thisRole.name
    }
    else{
      return "Custom role";
    }
    
  }
  transformDataForMaterialTable(data: any[], tableDataMetaDict: any) {
    return data.map((consumerTableDataItem) => {
      let obj: any = {};
      let thisUsersEnterperise = consumerTableDataItem.enterprises.find(value => value.enterprise_id == this.enterpriseId)
      for (let key in tableDataMetaDict) {
        if (key == 'role_id') {
          let roleName = this.roleIdToRoleName(thisUsersEnterperise[key])
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: roleName,
            searchValue: roleName
          };
        }
        else if (key == 'bots') {

          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: thisUsersEnterperise[key].length + " bots assigned",
            searchValue: thisUsersEnterperise[key].length
          };
        }
        else {
          obj[tableDataMetaDict[key].displayValue] = {
            ...tableDataMetaDict[key],
            originalKey: key,
            value: consumerTableDataItem[key],
            searchValue: consumerTableDataItem[key]
          };
        }
      }

      obj.originalSessionData = consumerTableDataItem;
      return obj;
    });
  }
  initializeTableData(data: any, tableDataMetaDict: any): void {
    this.tableData = this.transformDataForMaterialTable(data, this.getTableDataMetaDict());
    this.tableData = this.tableData.map((tableGataItem) => {
      // tableGataItem.Bots.value = tableGataItem.Bots.value.length + " bots assigned";
      tableGataItem.Actions.value = tableGataItem.Actions.value || [];
      tableGataItem.Actions.value.push({ show: true, name: 'modify', class: 'fa fa-edit mr-3 color-primary' });
      tableGataItem.Actions.value.push({ show: true, name: 'remove', class: 'fa fa-trash color-danger' });
      return tableGataItem;
    });
  }


  openDeletModal(template: TemplateRef<any>) {

    // this.selectedPipeline = pipeline;
    // this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.utilityService.openDangerModal(template, this.matDialog, this.dialogRefWrapper);
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }
  openUserEditModal(template: TemplateRef<any>) {
    this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);

  }
  customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any }, enterpriseDeleteModal, ModifyUserModal) {
    if (data.action === 'remove') {
      this.openDeletModal(enterpriseDeleteModal);

    }
    if (data.action === 'modify') {
      this.openUserEditModal(ModifyUserModal);
    }
  }

  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private serverService: ServerService) {
    super();
  }
  validateLogo(logo) {

    const formControl = new FormControl(logo);
    const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
    this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  }



  ngOnInit() {

    const RoleMapUrl = this.constantsService.getRoleMapUrl();
    this.serverService.makeGetReq<any>({ url: RoleMapUrl })
      .subscribe((value) => {
        this.roleMap = value.objects;
        // debugger;
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
          // debugger;
          // this.formGroup.patchValue(<any>value);
        });
      if (this.role === 'Admin') {
        const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({ url: enterpriseUsersUrl })
          .subscribe((value) => {
            this.store.dispatch([
              new SetEnterpriseUsersAction({ enterpriseUsers: value.objects })
            ]);
            this.initializeTableData(value.objects, this.getTableDataMetaDict());
          });
      }

    });
    // debugger;
    this.loggeduserenterpriseinfoMap$ =
      this.loggeduserenterpriseinfo$.pipe(
        map((value) => {
          return {
            ...value,
            enterpriseusers: value.enterpriseusers.map((enterpriseuser) => {
              debugger;
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
  log(z) {
    console.log(z);
  }
}
