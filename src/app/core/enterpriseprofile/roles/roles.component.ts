import { Component, OnInit, Output, Input, EventEmitter, TemplateRef } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/router.service';
import { IRole, IRoleResult } from '../../interfaces/IRole';
import { Observable } from 'rxjs';
import { IProfilePermission } from 'src/interfaces/profile-action-permission';
import { Select } from '@ngxs/store';
import { IAppState } from 'src/app/ngxs/app.state';
import { EnterpriseRoleTabName } from '../enterpriseprofile.component';
import { MatDialog } from '@angular/material';
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
    allRolesList : IRole[];
    modifyRole() {
        let body = {
            "name": this.selectedRoleName,
            "permissions": {
                "actions": this.selectedPermissionIdList
            }
        }
        let getRoleIdUrl = this.constantsService.getRoleIdUrl(this.selectedRole);
        debugger;
        this.serverService.makePutReq<any>({ url: getRoleIdUrl, body })
            .subscribe((roles) => {
                this.utilityService.showSuccessToaster("Role modified");
                this.navegateRole();
                // debugger;
                // this.selectedRoleName = roles.objects[0].name;
                // this.selectedRoleData = roles.objects[0];
                // this.selectedPermissionIdList = roles.objects[0].permissions.actions;
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
        debugger;
        this.serverService.makePostReq<any>({ url: getRoleUrl, body })
            .subscribe((roles) => {
                this.utilityService.showSuccessToaster("New Role added");
                this.navegateRole()
                // debugger;
                // this.selectedRoleName = roles.objects[0].name;
                // this.selectedRoleData = roles.objects[0];
                // this.selectedPermissionIdList = roles.objects[0].permissions.actions;
            });
        console.log(body);
        console.log(body);
    }
    navegateRole() {
        // this.routerService.addQueryParams({ roleState : this.myEnterpriseRoleTabName.roles });
        this.backToRoles.emit();
    }
    addPermission(obj) {
        debugger;
        obj.roleIds.forEach(element => {
            this.selectedPermissionIdList.push(element);
        });
        // this.selectedPermissionIdList.push(obj.roleId);
        this.selectedPermissionIdList = Array.from(new Set(this.selectedPermissionIdList));
    }
    removePermission(obj) {
        debugger;
        obj.roleIds.forEach(element => {
            this.selectedPermissionIdList = this.selectedPermissionIdList.filter(val => val != element);
        });
        this.selectedPermissionIdList = Array.from(new Set(this.selectedPermissionIdList));
    }
    baseRoleChanged(RoleId){
        // selectedRoleBaseRole
        debugger;
        this.allRolesList;
        let thisRole = this.allRolesList.find( role => role.id == RoleId);
        this.selectedPermissionIdList = thisRole.permissions.actions;
        // this.addPermission({"roleIds":thisRole.permissions.actions});
    }
    ngOnInit() {
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
        if (!this.isNewRole) {
            let getRoleByIdUrl = this.constantsService.getRoleByIdUrl(this.selectedRole);
            debugger;
            this.serverService.makeGetReq<any>({ url: getRoleByIdUrl })
                .subscribe((roles) => {
                    debugger;
                    this.system_role = roles.objects[0].enterprise_id == 0;
                    this.selectedRoleName = roles.objects[0].name;
                    this.selectedRoleData = roles.objects[0];
                    this.selectedPermissionIdList = roles.objects[0].permissions.actions;
                });
        }



        // this. = this.route.params.subscribe(params => {
        //   this.id = +params['id']; // (+) converts string 'id' to a number

        //   // In a real app: dispatch action to load the details here.
        // });
    }
    ngOnDestroy() {

    }

}
