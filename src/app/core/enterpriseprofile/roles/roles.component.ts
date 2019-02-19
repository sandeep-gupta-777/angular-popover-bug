import { Component, OnInit, Output, Input, EventEmitter, TemplateRef } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';
import { IRole, IRoleResult } from '../../interfaces/IRole';
import { Observable } from 'rxjs';
import { IProfilePermission } from 'src/interfaces/profile-action-permission';
import { Select } from '@ngxs/store';
import { IAppState } from 'src/app/ngxs/app.state';
import { EnterpriseRoleTabName } from '../enterpriseprofile.component';
import { UtilityService } from 'src/app/utility.service';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    constructor(
        private serverService: ServerService,
        private utilityService: UtilityService,
        private constantsService: ConstantsService
    ) { }
    selectedPermissionIdList: number[] = [];
    selectedRoleData: IRole;
    selectedRoleName: string = "";
    selectedRoleBaseRole: number;
    serchedAction: string = "";
    serchedPermission: string = "";
    @Output() backToRoles = new EventEmitter();
    show = false;
    panelOpenState = false;
    system_role: boolean = false;
    categoryList = [];
    @Select() app$: Observable<IAppState>
    @Input() selectedRole: number;
    @Input() isNewRole: boolean;
    permissionList: IProfilePermission[];
    myEnterpriseRoleTabName = EnterpriseRoleTabName;
    allRolesList: IRole[];
    @Output() roleListChanged = new EventEmitter();

    modifyRole() {
        let body = {
            "name": this.selectedRoleName,
            "permissions": {
                "actions": this.selectedPermissionIdList
            }
        }
        let getRoleIdUrl = this.constantsService.getRoleIdUrl(this.selectedRole);

        this.serverService.makePutReq<any>({ url: getRoleIdUrl, body })
            .subscribe((roles) => {
                this.utilityService.showSuccessToaster("Role modified");
                this.roleListChanged.emit();
                this.navegateRole();
            });
        console.log(body);
    }
    createNewRole() {
        let body = {
            "name": this.selectedRoleName,
            "permissions": {
                "actions": this.selectedPermissionIdList
            },
            "base_role": +this.selectedRoleBaseRole
        }
        let getRoleUrl = this.constantsService.getRoleUrl();

        this.serverService.makePostReq<any>({ url: getRoleUrl, body })
            .subscribe((roles) => {
                this.utilityService.showSuccessToaster("New Role added");
                this.roleListChanged.emit();
                this.navegateRole()
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
            this.selectedPermissionIdList = this.selectedPermissionIdList.filter(val => val != element);
        });
        this.selectedPermissionIdList = Array.from(new Set(this.selectedPermissionIdList));
    }
    baseRoleChanged(RoleId) {

        this.allRolesList;
        let thisRole = this.allRolesList.find(role => role.id == RoleId);
        this.selectedPermissionIdList = thisRole.permissions.actions;
    }
    deleteRole() {
        let getRoleIdUrl = this.constantsService.getRoleIdUrl(this.selectedRole);
    
        this.serverService.makeDeleteReq<any>({ url: getRoleIdUrl })
          .subscribe((roles) => {
            this.utilityService.showSuccessToaster("Role deleted");
            this.navegateRole();
          });
      }
    ngOnInit() {

        if (!this.isNewRole) {
            let getRoleByIdUrl = this.constantsService.getRoleByIdUrl(this.selectedRole);

            this.serverService.makeGetReq<any>({ url: getRoleByIdUrl })
                .subscribe((roles) => {

                    this.system_role = roles.objects[0].enterprise_id == 0;
                    this.selectedRoleName = roles.objects[0].name;
                    this.selectedRoleData = roles.objects[0];
                    this.selectedPermissionIdList = roles.objects[0].permissions.actions;
                    if (this.system_role && this.selectedRoleData.id == 2) {
                        this.app$.subscribe((value) => {
                            this.selectedPermissionIdList = value.masterProfilePermissions.map(permission => {
                                return permission.id
                            });
                        });
                    }
                });
        }
        let getRoleUrl = this.constantsService.getRoleUrl();
        this.serverService.makeGetReq<IRoleResult>({ url: getRoleUrl })
            .subscribe((roles: IRoleResult) => {
                this.allRolesList = roles.objects;
            });
        this.app$.subscribe((value) => {
            this.permissionList = value.masterProfilePermissions;
            this.permissionList.forEach(permission => {
                this.categoryList.push(permission.category);
            })
            this.categoryList = Array.from(new Set(this.categoryList));
        });
    }
    ngOnDestroy() {

    }

}