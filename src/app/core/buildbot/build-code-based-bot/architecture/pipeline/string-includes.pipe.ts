import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringIncludes'
})
export class StringIncludesPipe implements PipeTransform {

  transform(string: string, substring?: any): any {
    if(!string || !substring) return false;
    return string.toLowerCase().includes(substring.toLowerCase());
  }

}
