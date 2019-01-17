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
import { NgForm } from "@angular/forms";
import { IHeaderData } from "src/interfaces/header-data";
import { IBotResult, IBot } from "../../interfaces/IBot";
import { SetAllBotListAction } from "../../view-bots/ngxs/view-bot.action";

@Component({
  selector: 'app-enterprise-users',
  templateUrl: './enterprise-users.component.html',
  styleUrls: ['./enterprise-users.component.scss']
})
export class EnterpriseUsersComponent extends MaterialTableImplementer implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  // loggeduserenterpriseinfoMap$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;
  @ViewChild('modifyBotList') modifyBotList: NgForm;
  @ViewChild('newBotList') newBotList: NgForm;
  @ViewChild('newBotDetails') newBotDetails: NgForm;
  @ViewChild('modifyBotDetails') modifyBotDetails: NgForm;
  dialogRefWrapper = { ref: null };
  object = Object;
  tableData;
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;
  enterpriseUserBotList: IBot[];//
  formGroup: FormGroup;
  roleMap: any;
  usertoDelete: any;
  selectedUserModify: any;
  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_USER_DICT_TEMPLATE;
  }
  roleIdToRoleName(roleId: number) {
    // debugger;
    if(this.roleMap){
      let thisRole = this.roleMap.find(role => role.id == roleId);
      if (thisRole) {
        return thisRole.name
      }
      else {
        return "Custom role";
      }
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
      tableGataItem.Actions.value.push({ show: true, name: 'remove', class: 'fa fa-trash mr-3 color-danger' });
      // if()
      debugger;
      if(!tableGataItem.originalSessionData.enterprises[0].is_active){
        tableGataItem.Actions.value.push({ show: true, name: 'exclamation', class: 'fa fa-exclamation-triangle color-yellow' });
      }

      return tableGataItem;
    });
    // debugger;
    this.tableData = [...this.tableData];
  }

  deleteUser() {
    let removeEnterpriseUserUrl = this.constantsService.removeEnterpriseUserUrl();
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    let body = { "user_id": this.usertoDelete.id };
    // debugger;

    this.serverService.makePostReq<any>({ url: removeEnterpriseUserUrl, body, headerData })
      .subscribe((value) => {
        console.log(value);
        let p = this.loggeduserenterpriseinfo.enterpriseusers.filter((user) => user.id !== this.usertoDelete.id);
        this.loggeduserenterpriseinfo.enterpriseusers = [...p];
        //shoaib
        // debugger;
        this.store.dispatch([
          new SetEnterpriseUsersAction({ enterpriseUsers: this.loggeduserenterpriseinfo.enterpriseusers })
        ])
        // .subscribe((enterprise) => {
        //   debugger;
        //   this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
        // });
        // this.tableData = this.tableData.filter((user) => user.originalSessionData.id !== this.usertoDelete.id);
      });
  }
  addNewUser() {
    let url = this.constantsService.createUserUrl();
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    // debugger;
    console.log(this.newBotDetails.value);
    // console.log(this.modifyBotList.value);
    // Object.keys(this.modifyBotList.value).filter((v))
    let list = [];
    Object.keys(this.newBotList.value).forEach(element => {
      if (this.newBotList.value[element] == true) {
        list.push(Number(element))
      }
    });
    console.log(list);
    let body = {
      "email": this.newBotDetails.value.email,
      "role_id": this.newBotDetails.value.role,
      "first_name": this.newBotDetails.value.first_name,
      "last_name": this.newBotDetails.value.last_name,
      "bots": list
    };
    this.serverService.makePostReq({ url, body, headerData })
      .subscribe((newUser) => {
        // debugger;
        this.loggeduserenterpriseinfo.enterpriseusers.push(newUser);
        //shoaib
        this.store.dispatch([
          new SetEnterpriseUsersAction({ enterpriseUsers: this.loggeduserenterpriseinfo.enterpriseusers })
        ])
        // .subscribe((enterprise) => {
        //   this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
        // });
      });

  }
  modifyUser() {
    let url = this.constantsService.updateUserUrl(this.selectedUserModify.id);
    const headerData: IHeaderData = { 'content-type': 'application/json' };
    // debugger;
    console.log(this.modifyBotDetails.value);
    // console.log(this.modifyBotList.value);
    // Object.keys(this.modifyBotList.value).filter((v))
    let list = [];
    Object.keys(this.modifyBotList.value).forEach(element => {
      if (this.modifyBotList.value[element] == true) {
        list.push(Number(element));
        // console.log(element);
      }
    });
    console.log(list);
    let body = {
      "role_id": this.modifyBotDetails.value.role,
      "bots": list
    };
    // debugger;
    this.serverService.makePutReq({ url, body, headerData })
      .subscribe((modifiedUser) => {
        // debugger;
        let p = this.loggeduserenterpriseinfo.enterpriseusers.filter((user) => user.id !== this.selectedUserModify.id);
        this.loggeduserenterpriseinfo.enterpriseusers = [...p];
        
        this.loggeduserenterpriseinfo.enterpriseusers.push(modifiedUser);
        //shoaib
        this.store.dispatch([
          new SetEnterpriseUsersAction({ enterpriseUsers: this.loggeduserenterpriseinfo.enterpriseusers })
        ])
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
      // console.log(data.data)
      this.usertoDelete = data.data;
      debugger;
      this.openDeletModal(enterpriseDeleteModal);

    }
    if (data.action === 'modify') {
      this.selectedUserModify = data.data;
      this.openUserEditModal(ModifyUserModal);
    }
  }

  selectAll(form: NgForm) {
    const formVal = form.value;
    for (const key in formVal) {
      formVal[key] = true;
    }
    form.form.patchValue(formVal);
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
    // debugger;
    

    this.loggeduser$.subscribe(({ user }) => {
      this.userid = user.id;
      this.role = user.role.name;
      this.enterpriseId = user.enterprise_id; //enterprise_id
      // debugger;
      const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(this.enterpriseId);
      this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
        .subscribe((value: IEnterpriseProfileInfo) => {
          this.store.dispatch([
            new SetEnterpriseInfoAction({ enterpriseInfo: value })
          ]).subscribe((enterprise) => {
            this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
          });
          // 
          // this.formGroup.patchValue(<any>value);
        });
      if (this.role === 'Admin') {
        const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({ url: enterpriseUsersUrl })
          .subscribe((value) => {
            this.store.dispatch([
              new SetEnterpriseUsersAction({ enterpriseUsers: value.objects })
            ]).subscribe((enterprise) => {
              this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
            });
            this.initializeTableData(value.objects, this.getTableDataMetaDict());
          });
      }

    });


  
    this.loggeduserenterpriseinfo$.subscribe((enterprise) => {
      // debugger;
      
      if(!this.roleMap){
        const headerData: IHeaderData = { 'content-type': 'application/json' };
        const RoleMapUrl = this.constantsService.getRoleMapUrl();
        this.serverService.makeGetReq<any>({ url: RoleMapUrl, headerData })
          .subscribe((value) => {
            this.roleMap = value.objects;
            if (enterprise.enterpriseusers) {
              this.initializeTableData(enterprise.enterpriseusers, this.getTableDataMetaDict());
              this.loggeduserenterpriseinfo = enterprise;
            }
            // 
          });
      }else{
        if (enterprise.enterpriseusers) {
          this.initializeTableData(enterprise.enterpriseusers, this.getTableDataMetaDict());
          this.loggeduserenterpriseinfo = enterprise;
        }
      }

      // if (enterprise.enterpriseusers) {
      //   this.initializeTableData(enterprise.enterpriseusers, this.getTableDataMetaDict());
      //   this.loggeduserenterpriseinfo = enterprise;
      // }

    });

    const url = this.constantsService.getBotListUrl();
    // debugger;
    const headerData: IHeaderData = { 'content-type': 'application/json' };

    this.serverService.makeGetReq<IBotResult>({ url, headerData }).
      subscribe((botResult) => {
        // debugger;
        // let codeBasedBotList: IBot[] = [];
        // let pipelineBasedBotList: IBot[] = [];

        // botResult.objects.forEach((bot) => {
        //   bot.bot_type !== 'genbot' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
        // });
        this.enterpriseUserBotList = botResult.objects;
        this.store.dispatch(new SetAllBotListAction({ botList: botResult.objects }));
        // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      });
    // this.loggeduserenterpriseinfo$.pipe(
    //   map((value) => {
    //     debugger;
    //     //sandeep
    //     return {
    //       ...value,
    //       enterpriseusers: value.enterpriseusers.map((enterpriseuser) => {
    //         if (enterpriseuser.enterprises[0].role_id == 2) {
    //           this.enterpriseUserBotList = enterpriseuser.enterprises[0].bots;
    //           debugger;
    //           console.log("filling bot");
    //         }

    //       })
    //     };
    //   })
    //   ).subscribe();
  }
  log(z) {
    console.log(z);
  }
}
