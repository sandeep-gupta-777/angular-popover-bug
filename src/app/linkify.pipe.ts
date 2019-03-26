import { Pipe, PipeTransform } from '@angular/core';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  transform(value: any, className?: any): any {
    value = UtilityService.linkify(value, className);

    return value;
  }

}
