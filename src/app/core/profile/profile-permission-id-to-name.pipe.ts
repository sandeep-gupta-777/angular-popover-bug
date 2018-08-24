import {Pipe, PipeTransform} from '@angular/core';
import {Select} from '@ngxs/store';
import {IAppState} from '../../ngxs/app.state';
import {Observable} from 'rxjs';

@Pipe({
  name: 'profilePermissionIdToName'
})
export class ProfilePermissionIdToNamePipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;

  transform(permissionIds: number[], args?: any): any {
    ;
    return this.app$.map((appState) => {
      let masterPermissions = appState.masterProfilePermissions;
      return permissionIds.map((permissionId) => {
        let matchedPermissionObject = masterPermissions.find((permission) => permissionId === permission.id);
        return matchedPermissionObject?matchedPermissionObject.name:`${permissionId}:not_in_backend`;
      });
    });
  }

}
