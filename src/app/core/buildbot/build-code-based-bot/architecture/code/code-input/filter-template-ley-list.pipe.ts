import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterTemplateLeyList'
})
export class FilterTemplateLeyListPipe implements PipeTransform {

  transform(templateKeys: string[], templateKeySearchKeyword: string, defaultTemplateKeys: string[], isIntersection: boolean): any {
    let filteredBySearchKeyword = templateKeys;
    if (templateKeySearchKeyword) {
      filteredBySearchKeyword = templateKeys.filter((key) => key.includes(templateKeySearchKeyword));
    }

    if (defaultTemplateKeys) {
      filteredBySearchKeyword = filteredBySearchKeyword.filter(key => !isIntersection === !defaultTemplateKeys.find(defaultKey => defaultKey === key));
    }
    return filteredBySearchKeyword;
  }

}
