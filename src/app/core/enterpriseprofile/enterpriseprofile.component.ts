
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
import { ActivatedRoute } from '@angular/router';

export enum EnterpriseRoleTabName {
  roles = 'roles',
  modifyRole = 'modifyRole',
  newRole = 'newRole'
}

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
  myEnterpriseRoleTabName = EnterpriseRoleTabName;
  tableData;
  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_USER_DICT_TEMPLATE;
  }
  isNewRole: boolean = false;
  userid: number;
  role: string;
  enterpriseId: number;
  loggeduserenterpriseinfo: IEnterpriseProfileInfo;
  logoError;
  enterpriseUserBotList: number[];
  currentRoleId : number ;
  currentRoleState : string = this.myEnterpriseRoleTabName.roles;
  roleSelected(obj){
    this.currentRoleId = obj.roleId;
  }
  constructor(
    private constantsService: ConstantsService,
    private route:ActivatedRoute ) {
  }

  ngOnInit() {
  //  this.route.queryParamMap.subscribe((queryParamMap)=>{
  //     // debugger;
  //     this.currentRoleState = queryParamMap.get('roleState'); 
  //     // if(this.currentRoleId){
  //     //   this.currentRoleState = this.myEnterpriseRoleTabName.modifyRole;
  //     // }

  //     console.log(this.currentRoleId);
  //  });
  }
log(z) {
  console.log(z);
}



}
