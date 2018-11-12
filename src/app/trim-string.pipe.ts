import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

  transform(str: string, args?: any): any {
    return str && str.trim();
  }

}
