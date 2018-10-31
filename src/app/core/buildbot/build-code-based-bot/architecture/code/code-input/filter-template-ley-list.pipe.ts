import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTemplateLeyList'
})
export class FilterTemplateLeyListPipe implements PipeTransform {

  transform(templateKeys: string[], templateKeySearchKeyword: string): any {
    if(!templateKeySearchKeyword) return templateKeys;
    return templateKeys.filter((key)=>key.includes(templateKeySearchKeyword));
  }

}
