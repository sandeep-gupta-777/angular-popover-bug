import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serializeEnterpriseprofileData'
})
export class SerializeEnterpriseprofileDataPipe implements PipeTransform {

  transform(enterpriseusers: any[], args?: any): any {
    debugger;
    return enterpriseusers.map((enterpriseUser)=>{
      let permissionLength// = enterpriseUser.role.permissions.actions.length;
      try{
        permissionLength = enterpriseUser.role.permissions.actions.length;
      }catch (e) {
        console.log(e);
      }
      return {
        ...enterpriseUser,
        role:enterpriseUser.role.name,
        permissions: permissionLength===0?'All':permissionLength
      }
    })
  }

}
