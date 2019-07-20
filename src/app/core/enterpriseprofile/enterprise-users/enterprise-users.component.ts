import {IEnterpriseProfileInfo} from 'src/interfaces/enterprise-profile';
import {SetEnterpriseInfoAction, SetEnterpriseUsersAction} from '../ngxs/enterpriseprofile.action';
import {IEnterpriseUser} from '../../interfaces/enterprise-users';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Store, Select} from '@ngxs/store';
import {ConstantsService} from 'src/app/constants.service';
import {UtilityService} from 'src/app/utility.service';
import {MatDialog} from '@angular/material';
import {ServerService} from 'src/app/server.service';
import {MaterialTableImplementer} from 'src/app/material-table-implementer';
import {OnInit, ViewChild, Component, TemplateRef, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {map} from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import {IHeaderData} from 'src/interfaces/header-data';
import {IBotResult, IBot} from '../../interfaces/IBot';
import {SetAllBotListAction} from '../../view-bots/ngxs/view-bot.action';
import { IRole } from '../../interfaces/IRole';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import { EnterpriseUserSmartTable } from './enterprise-user-smart-table';

@Component({
  selector: 'app-enterprise-users',
  templateUrl: './enterprise-users.component.html',
  styleUrls: ['./enterprise-users.component.scss']
})
export class EnterpriseUsersComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('form') f: HTMLFormElement;
  @ViewChild('modifyBotList') modifyBotList: NgForm;
  @ViewChild('newBotList') newBotList: NgForm;
  @ViewChild('newBotDetails') newBotDetails: NgForm;
  modifyBotRole: number;
  newBotRole: number;
  isSelectedRoleAdmin: boolean;
  dialogRefWrapper = {ref: null};
  object = Object;
  tableData;
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;
  enterpriseUserBotList: IBot[];//
  formGroup: FormGroup;
  @Input() roleMap: any;
  usertoDelete: any;
  selectedUserModify: any;
  searchBots: string = '';
  searchBotsInModify: string = '';

  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_USER_DICT_TEMPLATE;
  }
  deleteUser() {
    let removeEnterpriseUserUrl = this.constantsService.removeEnterpriseUserUrl();
    const headerData: IHeaderData = {'content-type': 'application/json'};
    let body = {'user_id': this.usertoDelete.id};
    //

    this.serverService.makePostReq<any>({url: removeEnterpriseUserUrl, body, headerData})
      .subscribe((value) => {
        let p = this.loggeduserenterpriseinfo.enterpriseusers.filter((user) => user.id !== this.usertoDelete.id);
        this.loggeduserenterpriseinfo.enterpriseusers = [...p];
        this.utilityService.showSuccessToaster('User has been deleted successfully');

        this.store.dispatch([
          new SetEnterpriseUsersAction({enterpriseUsers: this.loggeduserenterpriseinfo.enterpriseusers})
        ]);
      });
  }

  addNewUser() {
    let url = this.constantsService.createUserUrl();
    const headerData: IHeaderData = {'content-type': 'application/json'};
    //
    console.log(this.newBotDetails.value);
    // console.log(this.modifyBotList.value);
    // Object.keys(this.modifyBotList.value).filter((v))
    let list = [];
    Object.keys(this.newBotList.value).forEach(element => {
      if (this.newBotList.value[element] == true) {
        list.push(Number(element));
      }
    });
    console.log(list);
    let body = {
      'email': this.newBotDetails.value.email,
      'role_id': this.newBotDetails.value.role,
      'first_name': this.newBotDetails.value.first_name,
      'last_name': this.newBotDetails.value.last_name,
      'bots': list
    };
    this.serverService.makePostReq({url, body, headerData})
      .subscribe((newUser) => {
        //
        this.loggeduserenterpriseinfo.enterpriseusers.push(newUser);
        //shoaib
        this.utilityService.showSuccessToaster(' New user has been added successfully');

        this.store.dispatch([
          new SetEnterpriseUsersAction({enterpriseUsers: this.loggeduserenterpriseinfo.enterpriseusers})
        ]);
        // .subscribe((enterprise) => {
        //   this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
        // });
      });

  }

  modifyUser() {
    let url = this.constantsService.updateUserUrl(this.selectedUserModify.id);
    const headerData: IHeaderData = {'content-type': 'application/json'};


    console.log(this.modifyBotRole);
    let list = [];
    Object.keys(this.modifyBotList.value).forEach(element => {
      if (this.modifyBotList.value[element] == true) {
        list.push(Number(element));
      }
    });
    console.log(list);
    let body = {
      'role_id': this.modifyBotRole,
      'bots': list
    };
    //
    this.serverService.makePutReq({url, body, headerData})
      .subscribe((modifiedUser) => {

        let p = this.loggeduserenterpriseinfo.enterpriseusers.filter((user) => user.id !== this.selectedUserModify.id);
        this.loggeduserenterpriseinfo.enterpriseusers = [...p];

        this.loggeduserenterpriseinfo.enterpriseusers.push(modifiedUser);
        //shoaib
        this.utilityService.showSuccessToaster('User has been modified successfully');

        this.store.dispatch([
          new SetEnterpriseUsersAction({enterpriseUsers: this.loggeduserenterpriseinfo.enterpriseusers})
        ]);
      });

  }

  modifyBotRoleChanged(role) {
    if (role == 2) {
      this.selectAll(this.modifyBotList);
      this.isSelectedRoleAdmin = true;
      // this.modifyBotList.form.disable
    } else {
      // this.modifyBotList
      this.isSelectedRoleAdmin = false;
      this.modifyBotList.reset();
      let formlist = this.modifyBotList.value;
      for (let key of this.selectedUserModify.enterprises[0].bots) {
        formlist[key] = true;
      }
      this.modifyBotList.form.patchValue(formlist);
    }
  }

  newUserRoleChanged(role) {
    if (role == 2) {
      this.selectAll(this.newBotList);
      this.isSelectedRoleAdmin = true;
      // this.modifyBotList.form.disable
    } else {
      // this.modifyBotList
      this.isSelectedRoleAdmin = false;
    }
  }

  openDeletModal(template: TemplateRef<any>) {
    this.utilityService.openDangerModal(template, this.matDialog, this.dialogRefWrapper);
  }

  openUserEditModal(template: TemplateRef<any>) {
    this.searchBots = '';
    this.searchBotsInModify = '';
    this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    setTimeout(() => {

      this.modifyBotRole = this.selectedUserModify.enterprises[0].role_id;
      this.isSelectedRoleAdmin = this.modifyBotRole == 2 ? true : false;
      let formlist = this.modifyBotList.value;
      for (let key of this.selectedUserModify.enterprises[0].bots) {
        formlist[key] = true;
      }
      this.modifyBotList.form.patchValue(formlist);
    }, 0);


  }

  openNewUserModal(template: TemplateRef<any>) {
    this.searchBots = '';
    this.searchBotsInModify = '';
    this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    setTimeout(() => {

      this.isSelectedRoleAdmin = false;
      this.newBotRole = 4;
    }, 0);


  }

  customActionEventsTriggeredInSessionsTable(data: { action: string, data: any, source: any }, ModifyUserModal) {
    if (data.action === 'remove') {
      this.usertoDelete = data.data;
      this.utilityService.openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr:'danger-modal-header-border',
        data:{
          actionButtonText:"Remove",
          message: `Do you want to remove ${this.usertoDelete.first_name} ${this.usertoDelete.last_name} from ${this.loggeduserenterpriseinfo.name}?`,
          title:'Remove user?',
          isActionButtonDanger:true
        },
        dialog: this.matDialog,
        component:ModalConfirmComponent
      }).then((data)=>{
        if(data){
          this.deleteUser();
        }
      })
      // this.openDeletModal(enterpriseDeleteModal);
    }
    if (data.action === 'modify') {
      //
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
  noOfTrues(arr){

    let count = 0;
    let  p = Object.keys(arr) ;
    for (let x in p){
      if(arr[x] = "true"){ count = count+1;}
    }
    return count;
  }
  constructor(
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private serverService: ServerService) {
  }

  validateLogo(logo) {

    const formControl = new FormControl(logo);
    const logoErrorObj = this.utilityService.imageUrlHttpsError(formControl) || this.utilityService.imageUrlHavingValidExtnError(formControl);
    this.logoError = logoErrorObj && Object.keys(logoErrorObj)[0] || null;
  }

  enterpriseUserModal: EnterpriseUserSmartTable;
  ngOnInit() {
    


    this.loggeduser$.subscribe(({user}) => {
      if(!user) return;
      this.userid = user.id;
      this.role = user.role.name;
      this.enterpriseId = user.enterprise_id; //enterprise_id
      this.enterpriseUserModal = new EnterpriseUserSmartTable([],  this.getTableDataMetaDict(), {"roleMap" : this.roleMap,enterpriseId:this.enterpriseId});
      const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(this.enterpriseId);
      this.serverService.makeGetReq<IEnterpriseProfileInfo>({url: enterpriseProfileUrl})
        .subscribe((value: IEnterpriseProfileInfo) => {
          this.store.dispatch([
            new SetEnterpriseInfoAction({enterpriseInfo: value})
          ]).subscribe((enterprise) => {
            this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
          });
          //
          // this.basicInfoForm.patchValue(<any>value);
        });
      if (this.role === 'Admin') {
        const enterpriseUsersUrl = this.constantsService.getEnterpriseUsersUrl();
        this.serverService.makeGetReq<{ objects: IEnterpriseUser[] }>({url: enterpriseUsersUrl})
          .subscribe((value) => {
            this.store.dispatch([
              new SetEnterpriseUsersAction({enterpriseUsers: value.objects})
            ]).subscribe((enterprise) => {
              this.loggeduserenterpriseinfo = enterprise[0].loggeduserenterpriseinfo;
            });
            this.enterpriseUserModal.refreshData(value.objects);
          });
      }
    });


    this.loggeduserenterpriseinfo$.subscribe((enterprise) => {
      if (!this.roleMap) {
        const headerData: IHeaderData = {'content-type': 'application/json'};
        const RoleMapUrl = this.constantsService.getRoleUrl();
        this.serverService.makeGetReq<any>({url: RoleMapUrl, headerData})
          .subscribe((value) => {
            this.roleMap = value.objects;
            this.enterpriseUserModal.updateDependency({"roleMap" : this.roleMap});
            if (enterprise.enterpriseusers) {
               this.enterpriseUserModal.refreshData(enterprise.enterpriseusers);
              this.loggeduserenterpriseinfo = enterprise;
            }
            //
          });
      } else {
        if (enterprise.enterpriseusers) {
          this.enterpriseUserModal.refreshData(enterprise.enterpriseusers);
          this.loggeduserenterpriseinfo = enterprise;
        }
      }
    });

    const url = this.constantsService.getBotListUrl();
    //
    const headerData: IHeaderData = {'content-type': 'application/json'};

    this.serverService.makeGetReq<IBotResult>({url, headerData}).subscribe((botResult) => {
      //
      // let botList: IBot[] = [];
      // let pipelineBasedBotList: IBot[] = [];

      // botResult.objects.forEach((bot) => {
      //   bot.bot_type !== 'genbot' ? botList.push(bot) : pipelineBasedBotList.push(bot);
      // });
      this.enterpriseUserBotList = botResult.objects;
      this.store.dispatch(new SetAllBotListAction({botList: botResult.objects}));
      // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
      // this.store.dispatch(new SetCodeBasedBotListAction({botList: botList}));
    });
  }

  log(z) {
    console.log(z);
  }
}
