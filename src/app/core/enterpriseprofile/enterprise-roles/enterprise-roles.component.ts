import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';
import { IRole, IRoleResult } from '../../interfaces/IRole';
import { EnterpriseRoleTabName } from '../enterpriseprofile.component';
import { MatDialog } from '@angular/material';
import { UtilityService } from 'src/app/utility.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/ngxs/app.state';

@Component({
  selector: 'app-enterprise-roles',
  templateUrl: './enterprise-roles.component.html',
  styleUrls: ['./enterprise-roles.component.scss']
})
export class EnterpriseRolesComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private matDialog: MatDialog,
    private utilityService: UtilityService
  ) { }
  roleList;
  myEnterpriseRoleTabName = EnterpriseRoleTabName;
  dialogRefWrapper = { ref: null };
  deleteRole: IRole;
  allPermissionIdList:number[];
  reloaded :boolean=  false;
  @Output() roleListChanged = new EventEmitter();
  @Select() app$: Observable<IAppState>;
  @Output() selectedRole = new EventEmitter();
  @Output() enterRole = new EventEmitter();
  @Output() enterNewRole = new EventEmitter();

  navegateRole(id: number) {

    this.selectedRole.emit({ "roleId": id });
    this.enterRole.emit();
  }
  openDeletModal(template: TemplateRef<any>, role: IRole) {
    this.deleteRole = role;
    this.utilityService.openDangerModal(template, this.matDialog, this.dialogRefWrapper);
  }
  deleteRoleClicked() {
    let getRoleIdUrl = this.constantsService.getRoleIdUrl(this.deleteRole.id);

    this.serverService.makeDeleteReq<any>({ url: getRoleIdUrl })
      .subscribe((roles) => {
        let getRoleUrl = this.constantsService.getRoleUrl();
        this.serverService.makeGetReq<IRoleResult>({ url: getRoleUrl })
          .subscribe((roles: IRoleResult) => {
            this.roleList = roles.objects;
            this.utilityService.showSuccessToaster("Role deleted");
            this.roleListChanged.emit();
          });
      });
  }

  ngOnInit() {
    let getRoleUrl = this.constantsService.getRoleUrl();
    this.serverService.makeGetReq<IRoleResult>({ url: getRoleUrl })
      .subscribe((roles: IRoleResult) => {
        this.roleList = roles.objects;
        this.reloaded = true;
      });
      this.app$.subscribe((value) => {
        this.allPermissionIdList  = value.masterProfilePermissions.map(permission =>{
            return permission.id
        });
    });

  }

}
