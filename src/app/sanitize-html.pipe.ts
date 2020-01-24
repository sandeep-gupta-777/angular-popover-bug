import { Pipe, PipeTransform } from '@angular/core';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return UtilityService.sanitizeHTML(value);
  }

}
