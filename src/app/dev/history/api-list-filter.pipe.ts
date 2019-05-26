import {Pipe, PipeTransform} from '@angular/core';
import {IApi, IApiCollection} from "../interfaces";

@Pipe({
  name: 'apiListFilter'
})
export class ApiListFilterPipe implements PipeTransform {

  transform(apiList: IApi[], keyword?: string): any {
    if (!keyword) return apiList;

    return apiList.filter((api) => {
      try {
        return api.url.toString().toLowerCase().includes(keyword.toLowerCase());
      }catch (e) {
        console.log(e);
        return false;
      }
    });
  }
}
