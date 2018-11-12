import { Pipe, PipeTransform } from '@angular/core';
import {ELogType, LoggingService} from '../../logging.service';

@Pipe({
  name: 'serializeEnterpriseprofileData'
})
export class SerializeEnterpriseprofileDataPipe implements PipeTransform {

  transform(enterpriseusers: any[], args?: any): any {

    return enterpriseusers.map((enterpriseUser) => {
      let permissionLength; // = enterpriseUser.role.permissions.actions.length;
      try {
        permissionLength = enterpriseUser.role.permissions.actions.length;
      } catch (e) {
        LoggingService.error(e);
      }
      return {
        ...enterpriseUser,
        role: enterpriseUser.role.name,
        permissions: permissionLength === 0 ? 'All' : permissionLength
      };
    });
  }

}
