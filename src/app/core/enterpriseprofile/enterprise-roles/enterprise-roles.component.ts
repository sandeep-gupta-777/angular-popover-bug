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
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';

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

  @Select() app$: Observable<IAppState>;
  @Output() roleListChanged = new EventEmitter();
  allPermissionIdList: number[];
  reloaded =  false;
  @Output() selectedRole = new EventEmitter();
  @Output() enterRole = new EventEmitter();
  @Output() enterNewRole = new EventEmitter();
  notConfigtablePermissionIdList: number[] = [];

  navegateRole(id: number) {

    this.selectedRole.emit({ 'roleId': id });
    this.enterRole.emit();
  }
  openDeletModal(role: IRole) {
    this.deleteRole = role;
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Remove',
        message: `Do you want to remove ${this.deleteRole.name} ? `,
        title: 'Delete role?',
        isActionButtonDanger: true
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.deleteRoleClicked();
      }
    });
  }
  deleteRoleClicked() {
    const getRoleIdUrl = this.constantsService.getRoleIdUrl(this.deleteRole.id);

    this.serverService.makeDeleteReq<any>({ url: getRoleIdUrl })
      .subscribe((roles) => {
        const getRoleUrl = this.constantsService.getRoleUrl();
        this.serverService.makeGetReq<IRoleResult>({ url: getRoleUrl })
          .subscribe((roles_temp: IRoleResult) => {
            this.roleList = roles_temp.objects;
            this.roleListChanged.emit();
            this.utilityService.showSuccessToaster('Role deleted');
            this.roleListChanged.emit();
          });
      });
  }

  ngOnInit() {
    const getRoleUrl = this.constantsService.getRoleUrl();
    this.serverService.makeGetReq<IRoleResult>({ url: getRoleUrl })
      .subscribe((roles: IRoleResult) => {
        this.roleList = roles.objects;
        this.reloaded = true;
      });
      this.app$.subscribe((value) => {
        this.allPermissionIdList = [];
        value.masterProfilePermissions.forEach(permission => {
          if (!permission.is_configurable_action) { this.notConfigtablePermissionIdList.push(permission.id); }
          if (permission.is_configurable_action) {  this.allPermissionIdList.push(permission.id); }
        });
    });
  }

}
