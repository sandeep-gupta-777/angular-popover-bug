import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerService} from 'src/app/server.service';
import {ConstantsService} from 'src/app/constants.service';
import {IRole, IRoleResult} from '../../interfaces/IRole';
import {Observable} from 'rxjs';
import {IProfilePermission} from 'src/interfaces/profile-action-permission';
import {Select} from '@ngxs/store';
import {IAppState} from 'src/app/ngxs/app.state';
import {EnterpriseRoleTabName} from '../enterpriseprofile.component';
import {UtilityService} from 'src/app/utility.service';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {MatDialog} from '@angular/material';
import {ESplashScreens} from 'src/app/splash-screen/splash-screen.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormsService} from '../../../forms.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private constantsService: ConstantsService,
    private matDialog: MatDialog
  ) {
  }
  roleForm: FormGroup;
  selectedPermissionIdList: number[] = [];
  selectedRoleData: IRole;
  // selectedRoleBaseRole: number;
  serchedAction = '';
  serchedPermission = '';
  myESplashScreens = ESplashScreens;
  @Output() backToRoles = new EventEmitter();
  show = false;
  reloaded = false;
  panelOpenState = false;
  system_role = false;
  categoryList = [];
  @Select() app$: Observable<IAppState>;
  @Input() selectedRole: number;
  @Input() isNewRole: boolean;
  permissionList: IProfilePermission[];
  myEnterpriseRoleTabName = EnterpriseRoleTabName;
  allRolesList: IRole[];
  notConfigtablePermissionIdList: number[] = [];
  dialogRefWrapper = {ref: null};
  @Output() roleListChanged = new EventEmitter();

  modifyRole() {
    const body = {
      'name': this.roleForm.value.selectedRoleName,
      'permissions': {
        'actions': this.selectedPermissionIdList
      }
    };
    const getRoleIdUrl = this.constantsService.getRoleIdUrl(this.selectedRole);

    this.serverService.makePutReq<any>({url: getRoleIdUrl, body})
      .subscribe((roles) => {
        this.utilityService.showSuccessToaster('Role modified');
        this.roleListChanged.emit();
        this.navegateRole();
      });
    console.log(body);
  }

  createNewRole() {
    const body = {
      'name': this.roleForm.value.selectedRoleName,
      'permissions': {
        'actions': this.selectedPermissionIdList
      },
      'base_role': +this.roleForm.value.selectedRoleBaseRole
    };
    const getRoleUrl = this.constantsService.getRoleUrl();

    this.serverService.makePostReq<any>({url: getRoleUrl, body})
      .subscribe((roles) => {
        this.utilityService.showSuccessToaster('New Role added');
        this.roleListChanged.emit();
        this.navegateRole();
      });
    console.log(body);
    console.log(body);
  }

  navegateRole() {
    this.backToRoles.emit();
  }

  addPermission(obj) {

    obj.roleIds.forEach(element => {
      this.selectedPermissionIdList.push(element);
    });
    this.selectedPermissionIdList = Array.from(new Set(this.selectedPermissionIdList));
  }

  removePermission(obj) {

    obj.roleIds.forEach(element => {
      this.selectedPermissionIdList = this.selectedPermissionIdList.filter(val => val !== element);
    });
    this.selectedPermissionIdList = Array.from(new Set(this.selectedPermissionIdList));
  }

  baseRoleChanged(RoleId) {

    const thisRole = this.allRolesList.find(role => role.id === RoleId);
    this.selectedPermissionIdList = thisRole.permissions.actions.filter(id => {
      return !!!this.notConfigtablePermissionIdList.find(id1 => id1 === id);
    });
  }

  openDeletModal() {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Remove',
        message: `Do you want to remove ${this.roleForm.value.selectedRoleName} ? `,
        title: 'Delete role?',
        isActionButtonDanger: true
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.deleteRole();
      }
    });
    // this.utilityService.openDangerModal(template, this.matDialog, this.dialogRefWrapper);
  }

  deleteRole() {
    const getRoleIdUrl = this.constantsService.getRoleIdUrl(this.selectedRole);

    this.serverService.makeDeleteReq<any>({url: getRoleIdUrl})
      .subscribe((roles) => {
        this.utilityService.showSuccessToaster('Role deleted');
        this.roleListChanged.emit();
        this.navegateRole();
      });
  }

  ngOnInit() {

    this.roleForm = this.formBuilder.group({
      selectedRoleName: ['', [FormsService.startWithAlphabetValidator(), FormsService.lengthValidator(1, 64)]],
      selectedRoleBaseRole: [''],
    });
    // this.system_role = false;
    if (!this.isNewRole) {
      const getRoleByIdUrl = this.constantsService.getRoleByIdUrl(this.selectedRole);

      this.serverService.makeGetReq<any>({url: getRoleByIdUrl})
        .subscribe((roles) => {

          this.system_role = roles.objects[0].enterprise_id === 0;
          const selectedRoleName = roles.objects[0].name;
          this.roleForm.patchValue({selectedRoleName: selectedRoleName});
          this.selectedRoleData = roles.objects[0];
          this.selectedPermissionIdList = roles.objects[0].permissions.actions.filter(id => {
            return !!!this.notConfigtablePermissionIdList.find(id1 => id1 === id);
          });
          if (this.system_role && this.selectedRoleData.id === 2) {
            this.app$.subscribe((value) => {
              this.selectedPermissionIdList = [];
              value.masterProfilePermissions.forEach(permission => {
                if (permission.is_configurable_action) {
                  this.selectedPermissionIdList.push(permission.id);
                }
              });
              this.reloaded = true;

            });
          } else {
            this.reloaded = true;
          }

        });
    } else {
      this.system_role = false;
      this.reloaded = true;
    }
    const getRoleUrl = this.constantsService.getRoleUrl();
    this.serverService.makeGetReq<IRoleResult>({url: getRoleUrl})
      .subscribe((roles: IRoleResult) => {
        this.allRolesList = roles.objects;
      });

    this.app$.subscribe((value) => {
      value.masterProfilePermissions.forEach(permission => {
        if (!permission.is_configurable_action) {
          this.notConfigtablePermissionIdList.push(permission.id);
        }
      });

      this.permissionList = value.masterProfilePermissions.filter(d => d.is_configurable_action === true);

      this.permissionList.forEach(permission => {
        this.categoryList.push(permission.category);
      });
      this.categoryList = Array.from(new Set(this.categoryList));
    });
  }

}
