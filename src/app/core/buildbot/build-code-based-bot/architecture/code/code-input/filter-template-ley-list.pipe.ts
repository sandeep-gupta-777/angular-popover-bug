import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterTemplateLeyList'
})
export class FilterTemplateLeyListPipe implements PipeTransform {

  transform(templateKeys: { key: string, value: any }[], templateKeySearchKeyword: string, defaultTemplateKeys?: string[], isIntersection?: boolean): any {
    let filteredBySearchKeyword = templateKeys;
    if (templateKeySearchKeyword) {
      filteredBySearchKeyword = templateKeys.filter((item) => item.key.includes(templateKeySearchKeyword));
    }

    if (defaultTemplateKeys) {
      filteredBySearchKeyword = filteredBySearchKeyword.filter(key => !isIntersection === !defaultTemplateKeys.find(defaultKey => defaultKey === key.key));
    }
    return filteredBySearchKeyword;
  }

}
