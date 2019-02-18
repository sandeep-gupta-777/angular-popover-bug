import { Component, OnInit, ViewChild } from '@angular/core';
import { Select } from '@ngxs/store';
import { ConstantsService } from '../../constants.service';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { IEnterpriseProfileInfo } from '../../../interfaces/enterprise-profile';
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
    private constantsService: ConstantsService ) {
  }

  ngOnInit() {
  }
log(z) {
  console.log(z);
}



}
