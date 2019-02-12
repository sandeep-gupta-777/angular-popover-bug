
import {map} from 'rxjs/operators';
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

    return this.app$.pipe(map((appState) => {
      const masterPermissions = appState.masterProfilePermissions;
      if (!permissionIds || !masterPermissions) { return; }
      if (permissionIds.length === 0) {
        return masterPermissions.map((permission) => {
          return permission.name;
        });
      }
      return permissionIds.map((permissionId) => {
        const matchedPermissionObject = masterPermissions.find((permission) => permissionId === permission.id);
        return matchedPermissionObject ? matchedPermissionObject.name : `${permissionId}:not_in_backend`;
      });
    }));
  }

}
