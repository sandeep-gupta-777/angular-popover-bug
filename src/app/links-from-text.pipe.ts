import { Pipe, PipeTransform } from '@angular/core';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'linksFromText'
})
export class LinksFromTextPipe implements PipeTransform {

  transform(text: any, className?: any): any {
    if (!text) { return []; }
    return UtilityService.getLinksInText(text) || [];
  }

}
